<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    :title="getTitle"
    :width="adaptiveWidth"
    @ok="handleSubmit"
    :showFooter="showFooter"
    destroyOnClose
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>

<script setup lang="ts">
import { defineComponent, ref, computed, unref, useAttrs } from "vue";
import { BasicForm, useForm } from "/@/components/Form/index";

import { BasicDrawer, useDrawerInner } from "/@/components/Drawer";
import { useDrawerAdaptiveWidth } from "/@/hooks/jeecg/useAdaptiveWidth";
import { formSchema } from "../NlQuestionnaireIndex.data";


import { saveOrUpdate } from "../NlQuestionnaireIndex.api";


const emit = defineEmits(["success", "register"]);
const attrs = useAttrs();
const isUpdate = ref(true);
const rowId = ref("");
const [registerForm, { setProps, resetFields, setFieldsValue, validate, updateSchema }] = useForm({
  labelWidth: 90,
  schemas: formSchema,
  showActionButtonGroup: false
});
const showFooter = ref(true);
const addType=ref(1);
const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
  await resetFields();
  showFooter.value = data?.showFooter ?? true;
  setDrawerProps({ confirmLoading: false, showFooter: showFooter.value });
  isUpdate.value = !!data?.isUpdate;
  addType.value = data?.record?.addType;
  if(unref(addType)){
    await setFieldsValue({
      ...data.record
    });
  }
  // console.log(data.record);
  if (unref(isUpdate)) {
    rowId.value = data.record.id;

  }

  if (typeof data.record === "object") {
    setFieldsValue({
      ...data.record,
    });
  }
  setProps({ disabled: !showFooter.value });
});
const getTitle = computed(() => (!unref(isUpdate) ? "新增" : "编辑"));
const { adaptiveWidth } = useDrawerAdaptiveWidth();

async function handleSubmit() {
  try {
    let values = await validate();
    setDrawerProps({ confirmLoading: true });
    let isUpdateVal = unref(isUpdate);
    await saveOrUpdate(values, isUpdateVal);
    closeDrawer();
    emit("success", { isUpdateVal, values });
  } finally {
    setDrawerProps({ confirmLoading: false });
  }
}

</script>
