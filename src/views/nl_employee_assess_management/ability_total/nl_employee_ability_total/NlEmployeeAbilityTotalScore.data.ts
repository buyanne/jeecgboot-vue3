import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import { rules } from "/@/utils/helper/validator";
import { render } from "/@/utils/common/renderUtils";
//列表数据
export const columns: BasicColumn[] = [

  // {
  //   title: "测评计划",
  //   align: "center",
  //   dataIndex: "planName"
  // },
  {
    title: "姓名",
    align: "center",
    dataIndex: "employeeName"
  },
  {
    title: "身份证",
    align: "center",
    dataIndex: "idNum"
  },
  {
    title: "处理状态",
    align: "center",
    dataIndex: "handleState",
    customRender: ({ text }) => {
      let color = "gray";
      if (text == "4") {
        color = "green";
      }
      if (text == "3") {
        color = "red";
      }
      return render.renderTag(render.renderDict(text, "handle_state"), color);
    }
  },
  {
    title: "用户id",
    align: "center",
    dataIndex: "employeeId",
    ifShow: false
  }
  // {
  //   title: "测评计划id",
  //   align: "center",
  //   dataIndex: "planId",
  //   ifShow: false
  // }
];
//查询数据
export const searchFormSchema: FormSchema[] = [];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: "用户id",
    field: "employeeId",
    component: "Input",
    dynamicRules: ({ model, schema }) => {
      return [
        { required: true, message: "请输入用户id!" }
      ];
    }
  },
  {
    label: "测评计划id",
    field: "planId",
    component: "InputNumber",
    dynamicRules: ({ model, schema }) => {
      return [
        { required: true, message: "请输入测评计划id!" }
      ];
    }
  },
  {
    label: "综合能力得分",
    field: "score",
    component: "InputNumber",
    dynamicRules: ({ model, schema }) => {
      return [
        { required: true, message: "请输入综合能力得分!" }
      ];
    }
  },
  {
    label: "得分的等级",
    field: "scoreGrade",
    component: "Input"
  },
  {
    label: "使用的算法",
    field: "algKind",
    component: "InputNumber"
  },
  {
    label: "上传的时间",
    field: "uploadTime",
    component: "DatePicker",
    dynamicRules: ({ model, schema }) => {
      return [
        { required: true, message: "请输入上传的时间!" }
      ];
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

export const formSchema1: FormSchema[] = [
  {
    label: "身高（cm）",
    field: "height",
    component: "Input",
    required: true,
    dynamicDisabled: true
  },
  {
    label: "体重（kg）",
    field: "weight",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "肢体",
    field: "limbs",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "is_qualified",
      placeholder: "请选择是否合格",
      stringToNumber: true
    },
    dynamicDisabled: true

  },
  {
    label: "听力",
    field: "hearing",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "is_qualified",
      placeholder: "请选择是否合格",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "左眼视力",
    field: "eyesightLeft",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "右眼视力",
    field: "eyesightRight",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "语言能力",
    field: "languageAbility",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "is_qualified",
      placeholder: "请选择是否合格",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "呼吸频次（次/分钟）",
    field: "respiratoryRate",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "舒张压",
    field: "diastolicPressure",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "收缩压",
    field: "systolicPressure",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "心率",
    field: "heartRate",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "心电",
    field: "electrocardiograph",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "is_qualified",
      placeholder: "请选择是否合格",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "睡眠质量",
    field: "sleepSingleId",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "血常规异常项数量",
    field: "abnormalBlooddRoutineNum",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "血常规异常项",
    field: "abnorrmalBloodRoutine",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "尿常规异常项数量",
    field: "abnormalUrineRoutineNum",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "尿常规异常项",
    field: "abnormalUrineRoutine",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "肝功能异常项数量",
    field: "abnormalLiverFunctionNum",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "肝功能异常项",
    field: "abnormalLiverFunction",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "血糖",
    field: "bloodSugar",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "胸部x线检查描述",
    field: "chestxrayDescribe",
    component: "InputTextArea",
    dynamicDisabled: true

  },
  {
    label: "胸部x线检查结论",
    field: "chestxrayConclusion",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "chestxray_conclusion",
      placeholder: "请选择",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "既往史",
    field: "pasthistoryDisease",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "pasthistory_disease",
      placeholder: "请选择",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "疾病",
    field: "disease",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "disease",
      placeholder: "请选择",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "上传体检报告",
    field: "medicalexaminaFiled",
    component: "JUpload",
    dynamicDisabled: true
  },
  {
    label: "审核结论",
    field: "handleOption",
    component: "InputTextArea"
  },
  {
    label: "审核状态",
    field: "handleState",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "handle_state",
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
  employeeId: { title: "用户id", order: 0, view: "text", type: "string" },
  planId: { title: "测评计划id", order: 1, view: "number", type: "number" },
  score: { title: "综合能力得分", order: 2, view: "number", type: "number" },
  scoreGrade: { title: "得分的等级", order: 3, view: "text", type: "string" },
  algKind: { title: "使用的算法", order: 4, view: "number", type: "number" },
  uploadTime: { title: "上传的时间", order: 5, view: "date", type: "string" }
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}

export function getBpmFormSchema1(_formData): FormSchema[] {
  return formSchema1;
}
