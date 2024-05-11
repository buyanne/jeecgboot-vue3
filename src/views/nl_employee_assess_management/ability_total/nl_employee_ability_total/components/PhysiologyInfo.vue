<template>
  <div>
    <div style="min-height: 400px">
      <div v-if="!unref(showQuestion)">
        <BasicForm @register="registerForm"></BasicForm>
        <div style="width: 100%;text-align: center">
          <a-button @click="submitForm" pre-icon="ant-design:check" type="primary">提 交</a-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { BasicForm, useForm } from "/@/components/Form/index";
import { computed, defineComponent, ref, unref } from "vue";
import { defHttp } from "/@/utils/http/axios";
import { propTypes } from "/@/utils/propTypes";
import { getBpmFormSchema1 } from "../NlEmployeeAbilityTotalScore.data";
import { saveOrUpdate } from "../NlEmployeeAbilityTotalScore.api";
import PhysiologyQuestionListForm
  from "@/views/nl_employee_assess_management/ability_total/physiology_info/components/PhysiologyQuestionListForm.vue";


export default defineComponent({
  name: "PhysiologyInfo",
  methods: { unref },
  components: {
    PhysiologyQuestionListForm,
    BasicForm
  },
  props: {
    formData: propTypes.object.def({}),
    formBpm: propTypes.bool.def(true),
    employeeId: Number
  },
  setup(props) {
    const [registerForm, { setFieldsValue, setProps, getFieldsValue }] = useForm({
      labelWidth: 150,
      schemas: getBpmFormSchema1(props.formData),
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
      let params = { id: props.employeeId };
      console.log(params);
      const data = await defHttp.get({ url: queryByIdUrl, params });
      formData = { ...data };
      //设置表单的值
      await setFieldsValue(formData);
      //默认是禁用
      await setProps({ disabled: formDisabled.value });

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
