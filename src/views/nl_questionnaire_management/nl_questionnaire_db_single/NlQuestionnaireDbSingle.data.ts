import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import { rules } from "/@/utils/helper/validator";
import { render } from "/@/utils/common/renderUtils";
//列表数据
export const columns: BasicColumn[] = [
  {
    title: "题目类型",
    align: "center",
    dataIndex: "questionnaireIndexName"
  },
  {
    title: "问题描述",
    align: "center",
    dataIndex: "questionName"
  },
  {
    title: "目前状态",
    align: "center",
    dataIndex: "delFlag",
    customRender: ({ text }) => {
      const color = text == "0" ? "green" : "red";
      return render.renderTag(render.renderDict(text, "del_flag"), color);
    }
  }
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "题目类型",
    field: "questionnaireType",
    component: "JTreeSelect",
    componentProps: {
      dict: "nl_questionnaire_index,index_name,id",
      pidField: "parent_id"
    },
    // labelWidth:200,
  },
  {
    label: "问题描述",
    field: "questionName",
    component: "Input"
  },
  {
    label: "目前状态",
    field: "delFlag",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "del_flag",
      placeholder: "请选择目前状态",
      stringToNumber: true
    }
  }
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: "题目类型",
    field: "questionnaireType",
    component: "JTreeSelect",
    componentProps: {
      width: 19,
      dict: "nl_questionnaire_index,index_name,id",
      pidField: "parent_id"
    },
    dynamicRules: ({ model, schema }) => {
      return [{
        required: true,
        message: "选择题目类型"
      }];
    }
  },
  {
    label: "问题描述",
    field: "questionName",
    component: "Input",
    dynamicRules: ({ model, schema }) => {
      return [
        { required: true, message: "请输入问题描述!" }
      ];
    }
  },
  {
    label: "选项信息",
    field: "choiceList",

    component: "JAddInput",
    componentProps:{

    },
  },
  {
    label: "目前状态",
    field: "delFlag",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "del_flag",
      placeholder: "请选择目前状态",
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
  questionnaireType: { title: "题目类型", order: 0, view: "number", type: "number" },
  questionName: { title: "问题描述", order: 1, view: "text", type: "string" },
  delFlag: { title: "目前状态", order: 2, view: "number", type: "number" }
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
