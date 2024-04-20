
import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import { rules } from "/@/utils/helper/validator";
import { render } from "/@/utils/common/renderUtils";
import {
  getIndexTree
} from "@/views/nl_questionnaire_management/nl_questionnaire_index/NlQuestionnaireIndex.api";
//列表数据
export const columns: BasicColumn[] = [
  {
    title: "上级节点",
    align: "left",
    dataIndex: "parentId"
  },
  {
    title: "指标名称",
    align: "left",
    dataIndex: "indexName"
  },
  {
    title: "指标权重",
    align: "center",
    dataIndex: "indexWeight"
  },
  {
    title: "指标顺序",
    align: "center",
    dataIndex: "orderNum"
  },
  {
    title: "适用阶段",
    align: "center",
    dataIndex: "stageType",
    customRender: ({ text }) => {
      return render.renderDict(text, "stage_type");
    }
  }
];
//查询数据
export const searchFormSchema: FormSchema[] = [];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: "上级节点",
    field: "parentId",
    component: "JTreeSelect",
    required: true,
    componentProps: {
      dict:'nl_questionnaire_index,index_name,id',
      pidField:'parent_id',
    },

  },
  {
    label: "指标名称",
    field: "indexName",
    component: "Input",
    dynamicRules: ({ model, schema }) => {
      return [
        { required: true, message: "请输入指标名称!" }
      ];
    }
  },
  {
    label: "指标权重",
    field: "indexWeight",
    component: "InputNumber",
    dynamicRules: ({ model, schema }) => {
      return [
        { required: true, message: "请输入指标权重!" }
      ];
    }
  },
  {
    label: "指标顺序",
    field: "orderNum",
    component: "InputNumber",
    required:false,
    dynamicRules: ({ model, schema }) => {
      return [
        { required: false, message: "请输入指标顺序!" }
      ];
    }
  },
  {
    label: "适用阶段",
    field: "stageType",
    component: "JDictSelectTag",
    required:true,
    componentProps: {
      dictCode: "stage_type",
      placeholder: "请选择适用阶段",
      stringToNumber: true
    }
  },
  // TODO 主键隐藏字段，目前写死为ID
  {
    label: "",
    field: "id",
    component: "Input",
    show: false
  }
];

// 高级查询数据
export const superQuerySchema = {
  parentId: { title: "上级节点", order: 0, view: "number", type: "number" },
  indexName: { title: "指标名称", order: 1, view: "text", type: "string" },
  indexWeight: { title: "指标权重", order: 2, view: "number", type: "number" },
  orderNum: { title: "指标顺序", order: 3, view: "number", type: "number" },
  stageType: { title: "适用阶段", order: 4, view: "number", type: "number" }
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
