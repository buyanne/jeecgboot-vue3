import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import {
  getRootIndex, getIndexByRoot
} from "@/views/nl_questionnaire_management/nl_questionnaire_list/NlQuestionnaireList.api";


//列表数据
export const columns: BasicColumn[] = [
  {
    title: "测评计划",
    align: "center",
    dataIndex: "planName"
  },
  {
    title: "问卷类型",
    align: "center",
    dataIndex: "indexName"
  },
  {
    title: "问卷标题",
    align: "center",
    dataIndex: "questionTitle"
  },
  {
    title: "问卷说明",
    align: "center",
    dataIndex: "questionDescription"
  },

  {
    title: "问卷总分",
    align: "center",
    dataIndex: "totalScore"
  },
  {
    title: "问卷完成总时间",
    align: "center",
    dataIndex: "totalTime"
  },
  {
    title: "问卷开始时间",
    align: "center",
    dataIndex: "questionStartTime"
  },
  {
    title: "问卷结束时间",
    align: "center",
    dataIndex: "questionEndTime"
  }

];
//查询数据
export const searchFormSchema: FormSchema[] = [

  {
    label: "问卷标题",
    field: "questionTitle",
    // required: true,
    component: "Input"
  },
  {
    label: "问卷类型",
    field: "questionnaireType",
    component: "ApiSelect",
    componentProps: {
      api: getRootIndex,
      numberToString: true,
      labelField: "indexName",
      valueField: "id"
    },
    // component: "JTreeSelect",
    // // required: true,
    // componentProps: {
    //   dict: "nl_questionnaire_index,index_name,id",
    //   pidField: "parent_id"
    // },
    colProps: {
      span: 8,
      offset: 2
    }
  }
];

export const questionListSchema: FormSchema[] = [
  {
    label: "题目",
    field: "questionName",
    component: "JInput"
  },
  {
    label:'选项',
    field:'choiceList',
    component:'JCheckbox'
  },
  // TODO 主键隐藏字段，目前写死为ID
  {
    label: "",
    field: "id",
    component: "Input",
    show: false
  }
];

//表单数据
export const formSchema: FormSchema[] = [
  // {
  //   label: "测评计划id",
  //   field: "planId",
  //   component: "InputNumber",
  //   dynamicRules: ({ model, schema }) => {
  //     return [
  //       { required: true, message: "请输入测评计划id!" }
  //     ];
  //   }
  // },
  {
    label: "测评计划",
    field: "planId",
    component: "JSearchSelect",
    required: true,
    componentProps: {
      dict: "nl_employee_assess_plan,plan_name,id",
      async: true
    },
    colProps: {
      span: 8,
      offset: 4
    }
  },
  {
    label: "问卷类型",
    field: "questionnaireType",
    required: true,
    component: "ApiSelect",
    componentProps: ({ formActionType }) => {
      return {
        api: getRootIndex,
        numberToString: false,
        labelField: "indexName",
        valueField: "id",
        onSelect: async (option) => {
          const { clearValidate, updateSchema, setFieldsValue } = formActionType;
          // console.log(option, value);
          const treeData = await getIndexByRoot({ questionnaireType: option });
          // console.log(treeData);
          setFieldsValue({ questionType: null });
          updateSchema([
            {
              field: "questionType",
              // valueField: "",
              componentProps: {
                treeData
              }

            }

          ]);

          clearValidate();

        }
      };
    },
    colProps: {
      span: 8,
      offset: 2
    }
  },
  {
    label: "问卷标题",
    field: "questionTitle",
    required: true,
    component: "Input"
  },
  {
    label: "问卷说明",
    field: "questionDescription",
    component: "InputTextArea"
  },
  {
    label: "题目类型",
    field: "questionType",
    component: "TreeSelect",
    required: true,
    componentProps: {
      fieldNames: {
        label: "indexName",
        key: "id",
        value: "id"
      }
    },
    colProps: {
      span: 8,
      offset: 8
    }
  },
  {
    label: "题目数量",
    field: "singleNum",
    component: "Input",
    required: true,
    colProps: {
      span: 8,
      offset: 4
    },
    componentProps: ({ formActionType }) => {
      return {
        onChange: (singleNum) => {
          const { getFieldsValue, setFieldsValue } = formActionType;
          // console.log(singleNum.target.value);
          let fieldsValue = getFieldsValue();
          let singleScore = fieldsValue.singleScore;
          // console.log(fieldsValue.singleScore, fieldsValue.singleNum);
          if (singleScore == undefined || singleScore == "") {
            return;
          }
          setFieldsValue({ "totalScore": singleNum.target.value * singleScore });
        }
      };
    }
  },
  {
    label: "每题分数",
    field: "singleScore",
    component: "Input",
    required: true,
    colProps: {
      span: 8,
      offset: 2
    },
    componentProps: ({ formActionType }) => {
      return {
        onChange: (singleScore) => {
          const { getFieldsValue, setFieldsValue } = formActionType;
          let fieldsValue = getFieldsValue();
          let singleNum = fieldsValue.singleNum;
          if ((singleScore.target.value != undefined || singleScore.target.value != "") && (singleNum == undefined || singleNum == "")) {
            return;
          }
          setFieldsValue({ "totalScore": singleScore.target.value * fieldsValue.singleNum });
        }
      };
    }
  },
  {
    label: "问卷总分",
    field: "totalScore",
    component: "AutoComplete",
    componentProps: {},
    colProps: {
      span: 8,
      offset: 4
    },
    dynamicDisabled: false,
    required: true
  },
  {
    label: "完成时间",
    field: "totalTime",
    component: "Input",
    required: true,
    // labelWidth: 5,
    componentProps: {
      suffix: "分钟"
    },
    colProps: {
      span: 8,
      offset: 2
    }
  },
  {
    label: "问卷开始时间",
    field: "questionStartTime",
    component: "DatePicker",
    componentProps: {
      showTime: true,
      valueFormat: "YYYY-MM-DD HH:mm:ss"
    },
    colProps: {
      span: 11,
      offset: 2
    }
  },
  {
    label: "问卷结束时间",
    field: "questionEndTime",
    component: "DatePicker",
    componentProps: {
      showTime: true,
      valueFormat: "YYYY-MM-DD HH:mm:ss"
    },
    colProps: {
      span: 11,
      offset: 0
    }
  },
  // {
  //   label: "问卷创建时间",
  //   field: "questionAddTime",
  //   component: "DatePicker",
  //   // valueField:useNow(),
  //   componentProps: {
  //     showTime: true,
  //     valueFormat: "YYYY-MM-DD HH:mm:ss"
  //   }
  // },
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
  planId: { title: "测评计划id", order: 0, view: "number", type: "number" },
  questionnaireType: { title: "问卷类型", order: 1, view: "number", type: "number" },
  questionTitle: { title: "问卷标题", order: 2, view: "text", type: "string" },
  questionDescription: { title: "问卷说明", order: 3, view: "text", type: "string" },
  singleScore: { title: "单选题小分", order: 4, view: "number", type: "number" },
  singleNum: { title: "单选题数量", order: 5, view: "number", type: "number" },
  multiScore: { title: "多选题小分", order: 6, view: "number", type: "number" },
  multiNum: { title: "多选题数量", order: 7, view: "number", type: "number" },
  totalScore: { title: "问卷总分", order: 8, view: "number", type: "number" },
  totalTime: { title: "问卷完成总时间", order: 9, view: "datetime", type: "string" },
  questionStartTime: { title: "问卷开始时间", order: 10, view: "datetime", type: "string" },
  questionEndTime: { title: "问卷结束时间", order: 11, view: "datetime", type: "string" },
  questionAddTime: { title: "问卷创建时间", order: 12, view: "datetime", type: "string" }
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}

export function getQuestionListSchema(_formData): FormSchema[] {
  return questionListSchema;
}
