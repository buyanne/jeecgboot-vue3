import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { rules } from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '姓名',
    align: 'center',
    dataIndex: 'name',
  },
  {
    title: '性别',
    align: 'center',
    dataIndex: 'sex',
    customRender: ({ text }) => {
      return render.renderDict(text, 'sex');
    },
  },
  {
    title: '身份证号',
    align: 'center',
    dataIndex: 'idNum',
  },
  {
    title: '手机号',
    align: 'center',
    dataIndex: 'phone',
  },
  {
    title: '邮箱',
    align: 'center',
    dataIndex: 'email',
  },
  {
    title: '工作单位',
    align: 'center',
    dataIndex: 'workUnit',
  },
  {
    title: '技术专长',
    align: 'center',
    dataIndex: 'tecnicalExpertise',
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: '姓名',
    field: 'name',
    component: 'Input',
  },
  {
    label: '性别',
    field: 'sex',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'sex',
      placeholder: '请选择性别',
      stringToNumber: true,
    },
  },
  {
    label: '身份证号',
    field: 'idNum',
    component: 'Input',
    //colProps: { span: 6 },
  },
  {
    label: '手机号码',
    field: 'phone',
    component: 'Input',
    //colProps: { span: 6 },
  },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '姓名',
    field: 'name',
    component: 'Input',
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入姓名!' }];
    },
  },
  {
    label: '性别',
    field: 'sex',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'sex',
      placeholder: '请选择性别',
      stringToNumber: true,
    },
  },
  {
    label: '身份证号',
    field: 'idNum',
    component: 'Input',
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入身份证号!' }];
    },
  },
  {
    label: '手机号',
    field: 'phone',
    component: 'Input',
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入手机号!' }];
    },
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入邮箱!' }];
    },
  },
  {
    label: '工作单位',
    field: 'workUnit',
    component: 'Input',
  },
  {
    label: '技术专长',
    field: 'tecnicalExpertise',
    component: 'Input',
  },
  // TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
];

// 高级查询数据
export const superQuerySchema = {
  userId: { title: '用户id', order: 0, view: 'text', type: 'string' },
  name: { title: '姓名', order: 1, view: 'text', type: 'string' },
  sex: { title: '性别', order: 2, view: 'number', type: 'number' },
  idNum: { title: '身份证号', order: 3, view: 'text', type: 'string' },
  phone: { title: '手机号', order: 4, view: 'text', type: 'string' },
  email: { title: '邮箱', order: 5, view: 'text', type: 'string' },
  workUnit: { title: '工作单位', order: 6, view: 'text', type: 'string' },
  tecnicalExpertise: { title: '技术专长', order: 7, view: 'text', type: 'string' },
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
