<template>
  <div>

    <div style="min-height: 400px">
      <a-button @click="handleClick" v-if="unref(showQuestion)">返回</a-button>
      <div v-if="!unref(showQuestion)">
        <BasicForm  @register="registerForm"></BasicForm>

        <div style="width: 100%;text-align: center">
          <a-button @click="handleClick">点击去完成生理测评问卷</a-button>
          <a-button @click="submitForm" pre-icon="ant-design:check" type="primary">提 交</a-button>
        </div>
      </div>
      <PhysiologyQuestionListForm v-if="unref(showQuestion)"></PhysiologyQuestionListForm>
    </div>
  </div>

</template>

<script lang="ts">
import { BasicForm, useForm } from "/@/components/Form/index";
import { computed, defineComponent, ref,unref } from "vue";
import { defHttp } from "/@/utils/http/axios";
import { propTypes } from "/@/utils/propTypes";
import { getBpmFormSchema } from "../NlEmployeePhysiologyInfo.data";
import { saveOrUpdate } from "../NlEmployeePhysiologyInfo.api";
import PhysiologyQuestionListForm
  from "@/views/nl_employee_assess_management/ability_total/physiology_info/components/PhysiologyQuestionListForm.vue";


export default defineComponent({
  name: "NlEmployeePhysiologyInfoForm",
  methods: { unref },
  components: {
    PhysiologyQuestionListForm,
    BasicForm
  },
  props: {
    formData: propTypes.object.def({}),
    formBpm: propTypes.bool.def(true)
  },
  setup(props) {
    const [registerForm, { setFieldsValue, setProps, getFieldsValue }] = useForm({
      labelWidth: 150,
      schemas: getBpmFormSchema(props.formData),
      showActionButtonGroup: false,
      baseColProps: {
        span: 8,
        offset: 2
      }
    });

    const formDisabled = computed(() => {
      if (props.formData.disabled === false) {
        return false;
      }
      return false;
    });

    let formData = {};
    const queryByIdUrl = "/physiology_info/nlEmployeePhysiologyInfo/queryById";
    const showQuestion = ref(false);

    async function initFormData() {
      let params = {id: -1};
      const data = await defHttp.get({url: queryByIdUrl, params});
      formData = {...data}
      //设置表单的值
      await setFieldsValue(formData);
      //默认是禁用
      await setProps({disabled: formDisabled.value})
    }

    async function submitForm() {
      let data = getFieldsValue();
      let params = Object.assign({}, formData, data);
      console.log("表单数据", params);
      await saveOrUpdate(params, true);
    }

    function handleClick() {
      showQuestion.value = !showQuestion.value;
    }

    initFormData();

    return {
      registerForm,
      formDisabled,
      submitForm,
      handleClick,
      showQuestion
    };
  }
});
</script>
