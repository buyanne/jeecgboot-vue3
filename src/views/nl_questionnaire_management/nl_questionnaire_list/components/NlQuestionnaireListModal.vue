<template>
  <BasicModal v-bind="$attrs" @register="registerModal" destroyOnClose :title="title" :width="800"
              @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>

<script lang="ts" setup>
import { ref, computed, unref } from "vue";
import { BasicModal, useModalInner } from "/@/components/Modal";
import { BasicForm, useForm } from "/@/components/Form/index";
import { formSchema } from "../NlQuestionnaireList.data";
import { getIndexByRoot, saveOrUpdate } from "../NlQuestionnaireList.api";
// Emits声明
const emit = defineEmits(["register", "success"]);
const isUpdate = ref(true);
//表单配置
const [registerForm, {
  setProps,
  resetFields,
  setFieldsValue,
  updateSchema,
  getFieldsValue,
  validate
}] = useForm({
  //labelWidth: 150,
  schemas: formSchema,
  showActionButtonGroup: false,
  baseColProps: { span: 24 }

});


//表单赋值
const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  //重置表单
  await resetFields();
  setModalProps({
    confirmLoading: false,
    showCancelBtn: !!data?.showFooter,
    showOkBtn: !!data?.showFooter,
  });
  isUpdate.value = !!data?.isUpdate;
  if (unref(isUpdate)) {
    //表单赋值
    await setFieldsValue({
      ...data.record
    });
  }
  let fieldsValue = getFieldsValue();
  let questionnaireType = fieldsValue.questionnaireType;
  if (questionnaireType != undefined) {
    const params = {
      questionnaireType: questionnaireType
    };
    const treeData = await getIndexByRoot(params);
    console.log(treeData);
    updateSchema([
      {
        field: "questionType",
        componentProps: {
          treeData
        }
      }
    ]);
  }
  // } else {
  //   updateSchema([
  //     {
  //       field: "questionnaireType",
  //       componentProps: {
  //         onChange: (e) => onQuestionnaireTypeChange(e.value)
  //       }
  //     }
  //   ]);
  // }

  // 隐藏底部时禁用整个表单
  setProps({ disabled: !data?.showFooter });
});
//设置标题
const title = computed(() => (!unref(isUpdate) ? "新增" : "编辑"));

async function onQuestionnaireTypeChange(questionnaireType) {
  const params = {
    questionnaireType: questionnaireType
  };
  const treeData = await getIndexByRoot(params);
  updateSchema([
    {
      field: "questionType",
      componentProps: {
        treeData
      }
    }
  ]);

}

//表单提交事件
async function handleSubmit(v) {
  try {
    let values = await validate();
    setModalProps({ confirmLoading: true });
    //提交表单
    await saveOrUpdate(values, isUpdate.value);
    //关闭弹窗
    closeModal();
    //刷新列表
    emit("success");
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>

<style lang="less" scoped>
/** 时间和数字输入框样式 */
:deep(.ant-input-number) {
  width: 100%
}

:deep(.ant-calendar-picker) {
  width: 100%
}
</style>
