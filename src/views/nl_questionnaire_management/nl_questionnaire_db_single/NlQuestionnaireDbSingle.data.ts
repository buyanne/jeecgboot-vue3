import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '题目类型',
    align:"center",
    dataIndex: 'questionnaireType'
   },
   {
    title: '问题描述',
    align:"center",
    dataIndex: 'questionName'
   },
   {
    title: '是否逻辑删除',
    align:"center",
    dataIndex: 'delFlag'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '题目类型',
    field: 'questionnaireType',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入题目类型!'},
          ];
     },
  },
  {
    label: '问题描述',
    field: 'questionName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入问题描述!'},
          ];
     },
  },
  {
    label: '是否逻辑删除',
    field: 'delFlag',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入是否逻辑删除!'},
          ];
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];

// 高级查询数据
export const superQuerySchema = {
  questionnaireType: {title: '题目类型',order: 0,view: 'number', type: 'number',},
  questionName: {title: '问题描述',order: 1,view: 'text', type: 'string',},
  delFlag: {title: '是否逻辑删除',order: 2,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}