import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { render } from '@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  // {
  //   title: '审核人id',
  //   align: 'center',
  //   dataIndex: 'infoId',
  // },
  {
    title: '姓名',
    align: 'center',
    dataIndex: 'realname',
  },
  {
    title: '审核状态',
    align: 'center',
    dataIndex: 'reviewResult',
    customRender: ({ text }) => {
      let color = 'green';
      if (text == '2') {
        color = 'gray';
      }
      return render.renderTag(render.renderDict(text, 'review_result'), color);
    },
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: '姓名',
    field: 'realname',
    component: 'Input',
  },
  {
    label: '审核结论',
    field: 'reviewResult',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'review_result',
      placeholder: '请选择审核结论',
      stringToNumber: true,
    },
  },
];

export const reviewedColumns: BasicColumn[] = [
  ...columns,
  {
    title: '操作类型',
    dataIndex: 'operateType_dictText',
    width: 40,
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '审核信息的id',
    field: 'infoId',
    component: 'InputNumber',
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入审核信息的id!' }];
    },
    dynamicDisabled: true,
    show:false,
  },
  {
    label: '姓名',
    field: 'realname',
    component: 'Input',
    dynamicDisabled: true,
  },
  {
    label: '审核状态',
    field: 'reviewResult',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'review_result',
      placeholder: '请选择审核结论',
      stringToNumber: true,
    },
  },
  {
    label: '审核说明',
    field: 'reviewMsg',
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
  infoId: { title: '审核信息的id', order: 0, view: 'number', type: 'number' },
  reviewType: { title: '审核信息的类型', order: 1, view: 'number', type: 'number' },
  reviewResult: { title: '审核结论', order: 2, view: 'number', type: 'number' },
  reviewMsg: { title: '审核说明', order: 3, view: 'text', type: 'string' },
  reviewBy: { title: '审核人id', order: 4, view: 'text', type: 'string' },
  reviewTime: { title: '审核时间', order: 5, view: 'datetime', type: 'string' },
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
