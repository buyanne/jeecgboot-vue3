import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '用户id',
    align:"center",
    dataIndex: 'employeeId'
   },
   {
    title: '测评计划id',
    align:"center",
    dataIndex: 'planId'
   },
   {
    title: '问卷编号',
    align:"center",
    dataIndex: 'questionnaireId'
   },
   {
    title: '问题id',
    align:"center",
    dataIndex: 'questionId'
   },
   {
    title: '用户的选项',
    align:"center",
    dataIndex: 'answerId'
   },
   {
    title: '本题得分',
    align:"center",
    dataIndex: 'score'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '用户id',
    field: 'employeeId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户id!'},
          ];
     },
  },
  {
    label: '测评计划id',
    field: 'planId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入测评计划id!'},
          ];
     },
  },
  {
    label: '问卷编号',
    field: 'questionnaireId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入问卷编号!'},
          ];
     },
  },
  {
    label: '问题id',
    field: 'questionId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入问题id!'},
          ];
     },
  },
  {
    label: '用户的选项',
    field: 'answerId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户的选项!'},
          ];
     },
  },
  {
    label: '本题得分',
    field: 'score',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入本题得分!'},
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
  employeeId: {title: '用户id',order: 0,view: 'number', type: 'number',},
  planId: {title: '测评计划id',order: 1,view: 'number', type: 'number',},
  questionnaireId: {title: '问卷编号',order: 2,view: 'number', type: 'number',},
  questionId: {title: '问题id',order: 3,view: 'number', type: 'number',},
  answerId: {title: '用户的选项',order: 4,view: 'text', type: 'string',},
  score: {title: '本题得分',order: 5,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}