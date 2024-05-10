<template>
  <div class="container">
    <div v-show="!isSubmitted" class="content-wrapper">
      <div class="question-list-wrapper">
        <div class="question-list">
          <h2>题目列表</h2>
          <div class="question-item"
               v-for="(question, questionIndex) in questionList.params"
               :key="questionIndex"
               :class="{ 'selected': question.selectedChoice !== undefined }"
          >
            {{ questionIndex + 1 }}
          </div>
        </div>
      </div>

      <div class="questionnaire">
        <a-page-header class="questionnaire-title">问卷： {{ quesionnaireData.questionTitle }}
        </a-page-header>
        <a-form>
          <div class="question-container"
               v-for="(question, questionIndex) in questionList.params"
               :key="questionIndex"
               style="display: flex"
          >
            <div class="question-title">
              第{{ questionIndex + 1 }}题：{{ question.questionName }}
            </div>
            <div class="question-choices-container">
              <div class="question-choices">
                <label
                  v-for="(choice,choiceIndex) in question.choiceList"
                  :key="choice.id"
                  class="choice-label"
                >
                  <input
                    type="radio"
                    :name="`question-${questionIndex}`"
                    :value="choice.id"
                    v-model="question.selectedChoice"
                  >
                  {{ getChoiceLabel(choiceIndex) }}. {{ choice.choiceContent }}
                </label>
              </div>
            </div>
          </div>
          <div class="submit-button-container">
            <a-button @click="submitForm" v-if="!isPreview">提交问卷</a-button>
          </div>
        </a-form>
      </div>
    </div>
    <!-- 如果已提交，显示感谢信息或其他内容 -->
    <div v-show="isSubmitted" class="centered-content">
      <h2>您已成功提交问卷，感谢您的参与！</h2>
      <!-- 可以添加一些导航链接或其他内容 -->
    </div>
  </div>
</template>

<script lang="ts">
import { BasicForm } from "/@/components/Form/index";
import { defineComponent, onMounted, reactive, ref, unref, UnwrapRef } from "vue";
import { defHttp } from "/@/utils/http/axios";
import { propTypes } from "/@/utils/propTypes";

// 定义选项
interface Choice {
  id: string;
  choiceContent: string;
  choiceScoreWeight: string;
  questionId: string;
}

// 定义问题
interface Question {
  id: number;
  questionName: string;
  choiceList: Choice[];
  selectedChoice?: number;
}

export default defineComponent({
  name: "PoliticsQuestionListForm",
  methods: { unref },
  components: {
    BasicForm
  },
  props: {
    formData: propTypes.object.def({}),
    formBpm: propTypes.bool.def(true),
    listId: Number,
    isPreview: Boolean,
    isShowQuestion: Boolean
  },
  setup: function(props) {
    // 动态数据
    const questionList: UnwrapRef<{ params: Question[] }> = reactive({ params: [] });
    // 问卷
    const quesionnaireData = ref({});
    const isShowQuestion = ref(false);
    //新增问题
    const add = (item) => {
      questionList.params.push({
        id: item.id,
        questionName: item.questionName,
        choiceList: item.choiceList
        // selectChoice: '0'
      });
    };
    const queryQuestionnaire = "/nl_politics_reply" +
      "/nlEmployeePoliticsRequestReply" +
      "/queryPoliticsQuestionnaire";
    const queryQuestionList = "/nl_politics_reply" +
      "/nlEmployeePoliticsRequestReply" +
      "/queryQuestionList";
    const saveReply = "/nl_politics_reply" +
      "/nlEmployeePoliticsRequestReply/saveReply";

    const isSubmitted = ref(false);

    async function initFormData() {
      let params = { id: -1 };
      let questionnaireList = await defHttp.get({ url: queryQuestionnaire, params });
      quesionnaireData.value = questionnaireList;
      console.log(questionnaireList);
      // if(questionnaireList==null){
      //   isSubmitted.value=true;
      // }
      const data = await defHttp.get({ url: queryQuestionList, params });
      data.forEach(add);
      console.log(data);
    }


    async function submitForm() {
      const params = {
        listId: quesionnaireData.value.id,
        questionList: questionList.params.map((question) => ({
          questionId: question.id,
          selectedChoice: question.selectedChoice
        }))
      };
      let cnt = 0;
      for (let i = 0; i < params.questionList.length; i++) {
        console.log(params.questionList[i].selectedChoice);
        if (params.questionList[i].selectedChoice == undefined) {
          cnt++;
        }
      }
      // console.log(cnt);
      if (cnt != 0) {
        alert("请全部选择后提交");
      }
      // todo 需要写后端的接口
      console.log(params);
      await defHttp.post({ url: saveReply, params });
      isSubmitted.value = true;
    }

    async function checkIsSubmitted() {
      let params = { id: -1 };
      let questionnaireList = await defHttp.get({ url: queryQuestionnaire, params });
      if (questionnaireList == null) {
        isSubmitted.value = true;
        // quesionnaireData.value = questionnaireList;
        // const data = await defHttp.get({ url: queryQuestionList, params });
        // data.forEach(add);
      } else {
        isSubmitted.value = false;
      }
      console.log(isSubmitted.value);
    }

    onMounted(checkIsSubmitted);

    function getChoiceLabel(index: number) {
      return String.fromCharCode(65 + index); // A, B, C, D, etc.
    }

    initFormData();


    return {
      submitForm,
      questionList,
      quesionnaireData,
      add,
      isSubmitted,
      getChoiceLabel
    };
  }
})
;
</script>
<style scoped>

.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 使用视口高度来居中垂直方向 */
  text-align: center; /* 确保文本也居中 */
}

.content-wrapper {
  display: flex;
}

.question-list {
  flex: 1;
  padding-right: 20px;
  border-right: 1px solid #ccc; /* 添加右边框 */
}

.question-item {
  display: inline-block;
  width: 20%;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid black;
  cursor: pointer;
}

.question-item.selected {
  background-color: green;
}

.questionnaire {
  flex: 3;
}

.submit-button-container {
  padding-left: 40%;
}

.questionnaire-title {
  font-weight: bold;
  font-size: 2em;
}


.question-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.question-title {
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 10px;
  max-width: 600px;
  word-wrap: break-word;
}

.question-choices-container {
  width: 100%;
  padding-left: 2%
}

.question-choices {
  text-align: left;
  padding-right: 20px; /* 限制右边的边距 */
}

.choice-label {
  display: block;
  cursor: pointer;
  margin: 5px 0;
  white-space: normal; /* 防止选项中断开 */
  overflow: hidden;
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  width: 80%; /* 宽度控制 */
}
</style>
