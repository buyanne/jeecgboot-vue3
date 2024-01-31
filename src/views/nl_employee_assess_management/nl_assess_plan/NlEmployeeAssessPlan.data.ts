import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { rules } from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '计划名称',
    align: 'center',
    dataIndex: 'planName',
  },
  {
    title: '评测计划说明',
    align: 'center',
    dataIndex: 'planContent',
  },
  {
    title: '是否发布',
    dataIndex: 'planRelease',
    customRender: ({ text }) => {
      const color = text == '0' ? 'gray' : 'green';
      return render.renderTag(render.renderDict(text, 'plan_release'), color);
    },
  },
  {
    title: '开始时间',
    align: 'center',
    dataIndex: 'startTime',
  },
  {
    title: '结束时间',
    align: 'center',
    dataIndex: 'endTime',
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: '计划名称',
    field: 'planName',
    component: 'Input',
  },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '计划名称',
    field: 'planName',
    component: 'Input',
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入计划名称!' }];
    },
  },
  {
    label: '评测计划说明',
    field: 'planContent',
    component: 'Input',
  },
  {
    label: '开始时间',
    field: 'startTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入开始时间!' }];
    },
  },
  {
    label: '结束时间',
    field: 'endTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入结束时间!' }];
    },
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
  planName: { title: '计划名称', order: 0, view: 'text', type: 'string' },
  planContent: { title: '评测计划说明', order: 1, view: 'text', type: 'string' },
  planRelease: { title: '是否发布', order: 2, view: 'number', type: 'number' },
  startTime: { title: '开始时间', order: 3, view: 'datetime', type: 'string' },
  endTime: { title: '结束时间', order: 4, view: 'datetime', type: 'string' },
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
