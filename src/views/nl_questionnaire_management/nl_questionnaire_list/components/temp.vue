<template>
  <div style="min-height: 400px">
    <BasicForm @register="registerForm"></BasicForm>
    <div style="width: 100%;text-align: center" v-if="!formDisabled">
      <a-button @click="submitForm" pre-icon="ant-design:LeftOutlined" type="primary">关 闭
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { BasicForm, useForm } from "/@/components/Form/index";
import { computed, defineComponent } from "vue";
import { defHttp } from "/@/utils/http/axios";
import { propTypes } from "/@/utils/propTypes";
import { getBpmFormSchema, getQuestionListSchema } from "../NlQuestionnaireList.data";

export default defineComponent({
  name: "QuestionListPreviewForm",
  components: {
    BasicForm
  },
  props: {
    formData: propTypes.object.def({}),
    formBpm: propTypes.bool.def(true),
    listId: Number
  },
  setup(props) {
    const [registerForm, { setFieldsValue, setProps, getFieldsValue }] = useForm({
      labelWidth: 150,
      schemas: getQuestionListSchema(props.formData),
      showActionButtonGroup: false
      // baseColProps: {
      //   span: 10
      // },
      // labelCol: {
      //   offset: 2
      // },
      // layout:'vertical'
    });

    const formDisabled = computed(() => {
      if (props.formData.disabled === false) {
        return false;
      }
      return true;
    });

    let formData = {};
    const queryByIdUrl = "/nl_questionnaire_list/nlQuestionnaireList/queryQuestionListByListId";

    async function initFormData() {
      // console.log(props.listId);

      let params = { id: props.listId };
      // console.log(params);
      const data = await defHttp.get({ url: queryByIdUrl, params });
      // console.log(data);
      let t=data[0];
      // console.log(t);
      formData = { ...t };
      // console.log(formData);
      //设置表单的值
      await setFieldsValue(formData);
      //默认是禁用
      // await setProps({ disabled: formDisabled.value });
    }

    async function submitForm() {
      console.log("nihao");
    }

    initFormData();

    return {
      registerForm,
      formDisabled,
      submitForm
    };
  }
});
</script>
