<template>
  <div class="container">

    <div class="content-wrapper">
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
  </div>
</template>

<script lang="ts">
import { BasicForm } from "/@/components/Form/index";
import { defineComponent, reactive, ref, UnwrapRef } from "vue";
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
  name: "QuestionListPreviewForm",
  components: {
    BasicForm
  },
  props: {
    formData: propTypes.object.def({}),
    formBpm: propTypes.bool.def(true),
    listId: Number,
    isPreview: Boolean
  },
  setup: function(props) {
    // 动态数据
    const questionList: UnwrapRef<{ params: Question[] }> = reactive({ params: [] });
    // 问卷
    const quesionnaireData = ref({});

    //新增问题
    const add = (item) => {
      questionList.params.push({
        id: item.id,
        questionName: item.questionName,
        choiceList: item.choiceList
        // selectChoice: '0'
      });
    };
    const queryByIdUrl = "/nl_questionnaire_list" +
      "/nlQuestionnaireList" +
      "/queryQuestionListByListId";
    const queryQuestionnaireListById = "/nl_questionnaire_list" +
      "/nlQuestionnaireList" +
      "/queryById";

    async function initFormData() {
      let params = { id: props.listId };
      const questionnaireList = await defHttp.get({ url: queryQuestionnaireListById, params });
      console.log(questionnaireList);
      quesionnaireData.value = questionnaireList;

      const data = await defHttp.get({ url: queryByIdUrl, params });
      console.log(data);
      data.forEach(add);
      console.log(questionList);
    }

    async function submitForm() {
      const result = {

        listId: props.listId,
        questionList: questionList.params.map((question) => ({
          qustionId: question.id,
          selectedChoice: question.selectedChoice
        }))
      };
      console.log(result);
    }

    function getChoiceLabel(index: number) {
      return String.fromCharCode(65 + index); // A, B, C, D, etc.
    }

    initFormData();


    return {
      submitForm,
      questionList,
      quesionnaireData,
      add,
      getChoiceLabel
    };
  }
});
</script>
<style scoped>

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
