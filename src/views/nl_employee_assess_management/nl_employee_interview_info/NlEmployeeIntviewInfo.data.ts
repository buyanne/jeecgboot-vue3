import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { rules } from '/@/utils/helper/validator';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  // {
  //   title: '面试人id',
  //   align: 'center',
  //   dataIndex: 'employeeId',
  // },
  {
    title: '面试人',
    align: 'center',
    dataIndex: 'name',
  },
  // {
  //   title: '面试专家id',
  //   align: 'center',
  //   dataIndex: 'epecialistId',
  // },
  {
    title: '面试专家',
    align: 'center',
    dataIndex: 'specialistName',
  },
  {
    title: '面试开始时间',
    align: 'center',
    dataIndex: 'interviewerStartTime',
  },
  {
    title: '面试结束时间',
    align: 'center',
    dataIndex: 'interviewerEndTime',
  },
  {
    title: '面试地点',
    align: 'center',
    dataIndex: 'interviewPlace',
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '面试人',
    field: 'employeeId',
    component: 'Input',
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入面试人id!' }];
    },
    show: false,
  },
  {
    label: '面试人',
    field: 'name',
    component: 'Input',
    dynamicDisabled: true,
  },
  {
    label: '面试专家',
    field: 'specialistId',
    component: 'JSearchSelect',
    componentProps: {
      dict: 'nl_specialist_info ,name ,id',
    },
    // component: 'InputNumber',
    // dynamicRules: ({ model, schema }) => {
    //   return [{ required: true, message: '请输入面试专家id!' }];
    // },
    // show: false,
  },
  // {
  //   label: '面试专家',
  //   field: 'specialistName',
  //   component: 'Input',
  //   dynamicDisabled: true,
  // },
  // {
  //   label: '123',
  //   field: 'nihao',
  //   component: 'JSearchSelect',
  //   componentProps: {
  //     dict: 'sys_user,realname,id',
  //   },
  // },
  {
    label: '面试开始时间',
    field: 'interviewerStartTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  {
    label: '面试结束时间',
    field: 'interviewerEndTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  {
    label: '面试地点',
    field: 'interviewPlace',
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
  // employeeId: { title: '面试人id', order: 0, view: 'text', type: 'string' },
  // epecialistId: { title: '面试专家id', order: 1, view: 'number', type: 'number' },
  // interviewerStartTime: { title: '面试开始时间', order: 2, view: 'datetime', type: 'string' },
  // interviewerEndTime: { title: '面试结束时间', order: 3, view: 'datetime', type: 'string' },
  // interviewPlace: { title: '面试地点', order: 4, view: 'text', type: 'string' },
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
