<template>
  <div style="min-height: 400px">
    <BasicForm @register="registerForm" />
    <div style="width: 100%; text-align: center">
      <a-button @click="submitForm" type="primary" ghost style="margin-right: 0.8rem"> 仅保存 </a-button>
      <a-button @click="submitForm" pre-icon="ant-design:check" type="primary">提 交</a-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { computed, defineComponent } from 'vue';
  import { defHttp } from '/@/utils/http/axios';
  import { propTypes } from '/@/utils/propTypes';
  import { getBpmFormSchema } from '../NlEmployeeInfo.data';
  import { saveOrUpdate } from '../NlEmployeeInfo.api';
  import { PopConfirmButton } from '@/components/Button';
  import { useUserStore } from '@/store/modules/user';
  import { formSchema } from '/@/components/Form/index';

  const userStore = useUserStore();

  export default defineComponent({
    name: 'NlEmployeeInfoForm',
    components: {
      PopConfirmButton,
      BasicForm,
    },
    props: {
      formData: propTypes.object.def({}),
      formBpm: propTypes.bool.def(true),
    },
    setup(props) {
      const [registerForm, { setFieldsValue, setProps, getFieldsValue }] = useForm({
        labelWidth: 150,
        schemas: getBpmFormSchema(props.formData),
        showActionButtonGroup: false,
        baseColProps: { span: 24 },
      });

      const formDisabled = computed(() => {
        return props.formData.disabled !== true;
      });

      let formData = {};
      const queryByIdUrl = '/nl_employee_info/nlEmployeeInfo/queryById';
      const querySysUserInfo = '/nl_employee_info/nlEmployeeInfo/querySysUserInfo';
      async function initFormData() {
        // if (props.formData.dataId == null) {
        //   const sysUser = await defHttp.get({ url: querySysUserInfo });
        //   formData = { ...sysUser };
        //   console.log(sysUser);
        //   return;
        // }
        // let params = { id: props.formData.dataId };
        // const data = await defHttp.get({ url: queryByIdUrl, params });
        // formData = { ...data };
        // //设置表单的值
        // await setFieldsValue(formData);
        // //默认是禁用
        // await setProps({ disabled: formDisabled.value });
        const sysUser = await defHttp.get({ url: querySysUserInfo });

        formData = { ...sysUser };
        console.log(formData);

        await setFieldsValue(formData);
        // await setProps({ disabled: formDisabled.value });
      }

      /*
       * 两个函数没有区别
       * todo 需要在controller中修改逻辑，比如说如果有数据就修改否则添加，在edit中
       * 好像完成了
       * */
      async function submitForm() {
        let data = getFieldsValue();
        let params = Object.assign({}, formData, data);
        console.log('表单数据', params);
        await saveOrUpdate(params, true);
      }

      async function handleSubmit() {
        let data = getFieldsValue;
        let params = Object.assign({}, formData, data);
        console.log('表单数据', params);
        await saveOrUpdate(params, true);
      }

      initFormData();

      return {
        registerForm,
        formDisabled,
        submitForm,
        handleSubmit,
      };
    },
  });
</script>
