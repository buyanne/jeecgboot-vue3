import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '测评计划id',
    align:"center",
    dataIndex: 'planId'
   },
   {
    title: '问卷类型',
    align:"center",
    dataIndex: 'questionnaireType'
   },
   {
    title: '问卷标题',
    align:"center",
    dataIndex: 'questionTitle'
   },
   {
    title: '问卷说明',
    align:"center",
    dataIndex: 'questionDescription'
   },
   {
    title: '单选题小分',
    align:"center",
    dataIndex: 'singleScore'
   },
   {
    title: '单选题数量',
    align:"center",
    dataIndex: 'singleNum'
   },
   {
    title: '多选题小分',
    align:"center",
    dataIndex: 'multiScore'
   },
   {
    title: '多选题数量',
    align:"center",
    dataIndex: 'multiNum'
   },
   {
    title: '问卷总分',
    align:"center",
    dataIndex: 'totalScore'
   },
   {
    title: '问卷完成总时间',
    align:"center",
    dataIndex: 'totalTime'
   },
   {
    title: '问卷开始时间',
    align:"center",
    dataIndex: 'questionStartTime'
   },
   {
    title: '问卷结束时间',
    align:"center",
    dataIndex: 'questionEndTime'
   },
   {
    title: '问卷创建时间',
    align:"center",
    dataIndex: 'questionAddTime'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
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
    label: '问卷类型',
    field: 'questionnaireType',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入问卷类型!'},
          ];
     },
  },
  {
    label: '问卷标题',
    field: 'questionTitle',
    component: 'Input',
  },
  {
    label: '问卷说明',
    field: 'questionDescription',
    component: 'Input',
  },
  {
    label: '单选题小分',
    field: 'singleScore',
    component: 'InputNumber',
  },
  {
    label: '单选题数量',
    field: 'singleNum',
    component: 'InputNumber',
  },
  {
    label: '多选题小分',
    field: 'multiScore',
    component: 'InputNumber',
  },
  {
    label: '多选题数量',
    field: 'multiNum',
    component: 'InputNumber',
  },
  {
    label: '问卷总分',
    field: 'totalScore',
    component: 'InputNumber',
  },
  {
    label: '问卷完成总时间',
    field: 'totalTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '问卷开始时间',
    field: 'questionStartTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '问卷结束时间',
    field: 'questionEndTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '问卷创建时间',
    field: 'questionAddTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
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
  planId: {title: '测评计划id',order: 0,view: 'number', type: 'number',},
  questionnaireType: {title: '问卷类型',order: 1,view: 'number', type: 'number',},
  questionTitle: {title: '问卷标题',order: 2,view: 'text', type: 'string',},
  questionDescription: {title: '问卷说明',order: 3,view: 'text', type: 'string',},
  singleScore: {title: '单选题小分',order: 4,view: 'number', type: 'number',},
  singleNum: {title: '单选题数量',order: 5,view: 'number', type: 'number',},
  multiScore: {title: '多选题小分',order: 6,view: 'number', type: 'number',},
  multiNum: {title: '多选题数量',order: 7,view: 'number', type: 'number',},
  totalScore: {title: '问卷总分',order: 8,view: 'number', type: 'number',},
  totalTime: {title: '问卷完成总时间',order: 9,view: 'datetime', type: 'string',},
  questionStartTime: {title: '问卷开始时间',order: 10,view: 'datetime', type: 'string',},
  questionEndTime: {title: '问卷结束时间',order: 11,view: 'datetime', type: 'string',},
  questionAddTime: {title: '问卷创建时间',order: 12,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}