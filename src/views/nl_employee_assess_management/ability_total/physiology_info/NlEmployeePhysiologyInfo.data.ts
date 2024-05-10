import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import { rules } from "/@/utils/helper/validator";
import { render } from "/@/utils/common/renderUtils";
//列表数据
export const columns: BasicColumn[] = [
  {
    title: "用户id",
    align: "center",
    dataIndex: "employeeId"
  },
  {
    title: "升高（cm）",
    align: "center",
    dataIndex: "height"
  },
  {
    title: "体重（kg）",
    align: "center",
    dataIndex: "weight"
  },
  {
    title: "肢体",
    align: "center",
    dataIndex: "limbs"
  },
  {
    title: "听力",
    align: "center",
    dataIndex: "hearing"
  },
  {
    title: "左眼视力",
    align: "center",
    dataIndex: "eyesightLeft"
  },
  {
    title: "右眼视力",
    align: "center",
    dataIndex: "eyesightRight"
  },
  {
    title: "语言能力",
    align: "center",
    dataIndex: "languageAbility"
  },
  {
    title: "呼吸频次（次/分钟）",
    align: "center",
    dataIndex: "respiratoryRate"
  },
  {
    title: "舒张压",
    align: "center",
    dataIndex: "diastolicPressure"
  },
  {
    title: "收缩压",
    align: "center",
    dataIndex: "systolicPressure"
  },
  {
    title: "心率",
    align: "center",
    dataIndex: "heartRate"
  },
  {
    title: "心电",
    align: "center",
    dataIndex: "electrocardiograph"
  },
  {
    title: "睡眠质量",
    align: "center",
    dataIndex: "sleepSingleId"
  },
  {
    title: "血常规异常项数量",
    align: "center",
    dataIndex: "abnormalBlooddRoutineNum"
  },
  {
    title: "血常规异常项",
    align: "center",
    dataIndex: "abnorrmalBloodRoutine"
  },
  {
    title: "尿常规异常项数量",
    align: "center",
    dataIndex: "abnormalUrineRoutineNum"
  },
  {
    title: "尿常规异常项",
    align: "center",
    dataIndex: "abnormalUrineRoutine"
  },
  {
    title: "肝功能异常项数量",
    align: "center",
    dataIndex: "abnormalLiverFunctionNum"
  },
  {
    title: "肝功能异常项",
    align: "center",
    dataIndex: "abnormalLiverFunction"
  },
  {
    title: "血糖",
    align: "center",
    dataIndex: "bloodSugar"
  },
  {
    title: "胸部x线检查描述",
    align: "center",
    dataIndex: "chestxrayDescribe"
  },
  {
    title: "胸部x线检查结论",
    align: "center",
    dataIndex: "chestxrayConclusion"
  },
  {
    title: "既往史",
    align: "center",
    dataIndex: "pasthistoryDisease"
  },
  {
    title: "疾病",
    align: "center",
    dataIndex: "disease"
  },
  {
    title: "上传体检报告",
    align: "center",
    dataIndex: "medicalexaminaFiled"
  },
  {
    title: "上传时间",
    align: "center",
    dataIndex: "updoadDate"
  },
  {
    title: "处理状态",
    align: "center",
    dataIndex: "handleState"
  },
  {
    title: "处理意见",
    align: "center",
    dataIndex: "handleOpinions"
  }
];
//查询数据
export const searchFormSchema: FormSchema[] = [];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: "身高（cm）",
    field: "height",
    component: "Input",
    required:true
  },
  {
    label: "体重（kg）",
    field: "weight",
    component: "Input"
  },
  {
    label: "肢体",
    field: "limbs",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "is_qualified",
      placeholder: "请选择是否合格",
      stringToNumber: true
    }

  },
  {
    label: "听力",
    field: "hearing",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "is_qualified",
      placeholder: "请选择是否合格",
      stringToNumber: true
    }
  },
  {
    label: "左眼视力",
    field: "eyesightLeft",
    component: "Input"
  },
  {
    label: "右眼视力",
    field: "eyesightRight",
    component: "Input"
  },
  {
    label: "语言能力",
    field: "languageAbility",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "is_qualified",
      placeholder: "请选择是否合格",
      stringToNumber: true
    }
  },
  {
    label: "呼吸频次（次/分钟）",
    field: "respiratoryRate",
    component: "Input"
  },
  {
    label: "舒张压",
    field: "diastolicPressure",
    component: "Input"
  },
  {
    label: "收缩压",
    field: "systolicPressure",
    component: "Input"
  },
  {
    label: "心率",
    field: "heartRate",
    component: "Input"
  },
  {
    label: "心电",
    field: "electrocardiograph",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "is_qualified",
      placeholder: "请选择是否合格",
      stringToNumber: true
    }
  },
  {
    label: "睡眠质量",
    field: "sleepSingleId",
    component: "Input"
  },
  {
    label: "血常规异常项数量",
    field: "abnormalBlooddRoutineNum",
    component: "Input"
  },
  {
    label: "血常规异常项",
    field: "abnorrmalBloodRoutine",
    component: "Input"
  },
  {
    label: "尿常规异常项数量",
    field: "abnormalUrineRoutineNum",
    component: "Input"
  },
  {
    label: "尿常规异常项",
    field: "abnormalUrineRoutine",
    component: "Input"
  },
  {
    label: "肝功能异常项数量",
    field: "abnormalLiverFunctionNum",
    component: "Input"
  },
  {
    label: "肝功能异常项",
    field: "abnormalLiverFunction",
    component: "Input"
  },
  {
    label: "血糖",
    field: "bloodSugar",
    component: "Input"
  },
  {
    label: "胸部x线检查描述",
    field: "chestxrayDescribe",
    component: "InputTextArea"

  },
  {
    label: "胸部x线检查结论",
    field: "chestxrayConclusion",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "chestxray_conclusion",
      placeholder: "请选择",
      stringToNumber: true
    }
  },
  {
    label: "既往史",
    field: "pasthistoryDisease",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "pasthistory_disease",
      placeholder: "请选择",
      stringToNumber: true
    }
  },
  {
    label: "疾病",
    field: "disease",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "disease",
      placeholder: "请选择",
      stringToNumber: true
    }
  },
  {
    label: "上传体检报告",
    field: "medicalexaminaFiled",
    component: "JUpload"
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
  height: { title: "升高（cm）", order: 1, view: "number", type: "number" },
  weight: { title: "体重（kg）", order: 2, view: "number", type: "number" },
  limbs: { title: "肢体", order: 3, view: "number", type: "number" },
  hearing: { title: "听力", order: 4, view: "number", type: "number" },
  eyesightLeft: { title: "左眼视力", order: 5, view: "number", type: "number" },
  eyesightRight: { title: "右眼视力", order: 6, view: "number", type: "number" },
  languageAbility: { title: "语言能力", order: 7, view: "number", type: "number" },
  respiratoryRate: { title: "呼吸频次（次/分钟）", order: 8, view: "number", type: "number" },
  diastolicPressure: { title: "舒张压", order: 9, view: "text", type: "string" },
  systolicPressure: { title: "收缩压", order: 10, view: "text", type: "string" },
  heartRate: { title: "心率", order: 11, view: "number", type: "number" },
  electrocardiograph: { title: "心电", order: 12, view: "number", type: "number" },
  sleepSingleId: { title: "睡眠质量", order: 13, view: "number", type: "number" },
  abnormalBlooddRoutineNum: {
    title: "血常规异常项数量",
    order: 14,
    view: "number",
    type: "number"
  },
  abnorrmalBloodRoutine: { title: "血常规异常项", order: 15, view: "text", type: "string" },
  abnormalUrineRoutineNum: {
    title: "尿常规异常项数量",
    order: 16,
    view: "number",
    type: "number"
  },
  abnormalUrineRoutine: { title: "尿常规异常项", order: 17, view: "text", type: "string" },
  abnormalLiverFunctionNum: {
    title: "肝功能异常项数量",
    order: 18,
    view: "number",
    type: "number"
  },
  abnormalLiverFunction: { title: "肝功能异常项", order: 19, view: "text", type: "string" },
  bloodSugar: { title: "血糖", order: 20, view: "number", type: "number" },
  chestxrayDescribe: { title: "胸部x线检查描述", order: 21, view: "text", type: "string" },
  chestxrayConclusion: { title: "胸部x线检查结论", order: 22, view: "number", type: "number" },
  pasthistoryDisease: { title: "既往史", order: 23, view: "number", type: "number" },
  disease: { title: "疾病", order: 24, view: "number", type: "number" },
  medicalexaminaFiled: { title: "上传体检报告", order: 25, view: "text", type: "string" },
  updoadDate: { title: "上传时间", order: 26, view: "datetime", type: "string" },
  handleState: { title: "处理状态", order: 27, view: "number", type: "number" },
  handleOpinions: { title: "处理意见", order: 28, view: "text", type: "string" }
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
