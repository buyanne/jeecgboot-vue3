import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import { rules } from "/@/utils/helper/validator";
import { render } from "/@/utils/common/renderUtils";
import { getToken } from "@/utils/auth";
//列表数据
export const columns: BasicColumn[] = [
  {
    title: "用户id",
    align: "center",
    dataIndex: "employeeId"
  },
  {
    title: "性别",
    align: "center",
    dataIndex: "sex"
  },
  {
    title: "身份证号",
    align: "center",
    dataIndex: "idNum"
  },
  {
    title: "出生年月",
    align: "center",
    dataIndex: "birthday",
    customRender: ({ text }) => {
      return !text ? "" : text.length > 10 ? text.substr(0, 10) : text;
    }
  },
  {
    title: "籍贯",
    align: "center",
    dataIndex: "ancestral"
  },
  {
    title: "民族",
    align: "center",
    dataIndex: "nation"
  },
  {
    title: "文化程度",
    align: "center",
    dataIndex: "diploma"
  },
  {
    title: "政治面貌",
    align: "center",
    dataIndex: "politicalOutlook"
  },
  {
    title: "婚姻状态",
    align: "center",
    dataIndex: "maritalStatus"
  },
  {
    title: "收入",
    align: "center",
    dataIndex: "income"
  },
  {
    title: "首次获得驾驶证年份",
    align: "center",
    dataIndex: "firstDriverLiocenseDate",
    customRender: ({ text }) => {
      return !text ? "" : text.length > 10 ? text.substr(0, 10) : text;
    }
  },
  {
    title: "上传驾驶证相关证明材料",
    align: "center",
    dataIndex: "driverLicenseFileid"
  },
  {
    title: "所属企业",
    align: "center",
    dataIndex: "enterprises"
  },
  {
    title: "工作经验",
    align: "center",
    dataIndex: "workExperience"
  },
  {
    title: "驾驶员资质",
    align: "center",
    dataIndex: "driverQualification"
  },
  {
    title: "上传船员证",
    align: "center",
    dataIndex: "driverQualificationFileid"
  },
  {
    title: "水上交通违法记录",
    align: "center",
    dataIndex: "trafficViolationRecord"
  },
  {
    title: "驾驶岗位",
    align: "center",
    dataIndex: "driverPost"
  },
  {
    title: "船员服务簿",
    align: "center",
    dataIndex: "recordBookFileid"
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
    label: "用户id",
    field: "employeeId",
    component: "Input",
    show: false
  },
  {
    label: "姓名",
    field: "realname",
    component: "Input",
    dynamicDisabled: ({}) => {
      return true;
    }
  },
  {
    label: "性别",
    field: "sex",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "sex",
      placeholder: "请选择性别",
      stringToNumber: true
    }
  },
  {
    label: "身份证号",
    field: "idNum",
    component: "Input"
  },
  {
    label: "出生年月",
    field: "birthday",
    component: "DatePicker"
  },
  {
    label: "籍贯",
    field: "ancestral",
    component: "JAreaSelect"
  },
  {
    label: "民族",
    field: "nation",
    component: "Input"
  },
  {
    label: "文化程度",
    field: "diploma",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "diploma",
      placeholder: "请选择文化程度",
      stringToNumber: true
    }
  },
  {
    label: "政治面貌",
    field: "politicalOutlook",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "political_outlook",
      placeholder: "请选择政治面貌",
      stringToNumber: true
    }
  },
  {
    label: "婚姻状态",
    field: "maritalStatus",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "marital_status",
      placeholder: "请选择婚姻状态",
      stringToNumber: true
    }
  },
  {
    label: "收入",
    field: "income",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "income",
      placeholder: "请选择收入情况",
      stringToNumber: true
    }
  },
  {
    label: "首次获得驾驶证年份",
    field: "firstDriverLiocenseDate",
    component: "DatePicker"
  },
  {
    label: "上传驾驶证相关证明材料",
    field: "driverLicenseFileid",
    component: "JUpload"
  },
  {
    label: "所属企业",
    field: "enterprises",
    component: "Input"
  },
  {
    label: "工作经验",
    field: "workExperience",
    component: "Input"
  },
  {
    label: "驾驶员资质",
    field: "driverQualification",
    component: "JImageUpload"
  },
  {
    label: "上传船员证",
    field: "driverQualificationFileid",
    component: "JImageUpload"
  },
  {
    label: "水上交通违法记录",
    field: "trafficViolationRecord",
    component: "InputNumber"
  },
  {
    label: "驾驶岗位",
    field: "driverPost",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "driver_post",
      placeholder: "请选择驾驶岗位",
      stringToNumber: true
    }
  },
  {
    label: "船员服务簿",
    field: "recordBookField",
    component: "Input"
  },
  // {
  //   label: '处理状态',
  //   field: 'handleState',
  //   component: 'JDictSelectTag',
  //   componentProps: {
  //     dictCode: 'handle_state',
  //     placeholder: '请选择处理状态',
  //     stringToNumber: true,
  //   },
  //   dynamicDisabled: false,
  // },
  // {
  //   label: '处理意见',
  //   field: 'handleOpinions',
  //   component: 'InputTextArea',
  //   dynamicDisabled: true,
  // },
  // TODO 主键隐藏字段，目前写死为ID
  {
    label: "",
    field: "id",
    component: "Input",
    show: false
  }
];

export const formSchemaById: FormSchema[] = [
  {
    label: "用户id",
    field: "employeeId",
    component: "Input",
    show: false
  },
  {
    label: "姓名",
    field: "realname",
    component: "Input",
    dynamicDisabled: ({}) => {
      return true;
    }
  },
  {
    label: "性别",
    field: "sex",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "sex",
      placeholder: "请选择性别",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "身份证号",
    field: "idNum",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "出生年月",
    field: "birthday",
    component: "DatePicker",
    dynamicDisabled: true
  },
  {
    label: "籍贯",
    field: "ancestral",
    component: "JAreaSelect",
    dynamicDisabled: true
  },
  {
    label: "民族",
    field: "nation",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "文化程度",
    field: "diploma",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "diploma",
      placeholder: "请选择文化程度",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "政治面貌",
    field: "politicalOutlook",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "political_outlook",
      placeholder: "请选择政治面貌",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "婚姻状态",
    field: "maritalStatus",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "marital_status",
      placeholder: "请选择婚姻状态",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "收入",
    field: "income",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "income",
      placeholder: "请选择收入情况",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "首次获得驾驶证年份",
    field: "firstDriverLiocenseDate",
    component: "DatePicker",
    dynamicDisabled: true
  },
  {
    label: "上传驾驶证相关证明材料",
    field: "driverLicenseFileid",
    component: "JUpload",
    dynamicDisabled: true
  },
  {
    label: "所属企业",
    field: "enterprises",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "工作经验",
    field: "workExperience",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "驾驶员资质",
    field: "driverQualification",
    component: "JImageUpload",
    dynamicDisabled: true
  },
  {
    label: "上传船员证",
    field: "driverQualificationFileid",
    component: "JImageUpload",
    dynamicDisabled: true
  },
  {
    label: "水上交通违法记录",
    field: "trafficViolationRecord",
    component: "InputNumber",
    dynamicDisabled: true
  },
  {
    label: "驾驶岗位",
    field: "driverPost",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "driver_post",
      placeholder: "请选择驾驶岗位",
      stringToNumber: true
    },
    dynamicDisabled: true
  },
  {
    label: "船员服务簿",
    field: "recordBookField",
    component: "Input",
    dynamicDisabled: true
  },
  {
    label: "处理状态",
    field: "handleState",
    component: "JDictSelectTag",
    componentProps: {
      dictCode: "handle_state",
      placeholder: "请选择处理状态",
      stringToNumber: true
    },
    dynamicDisabled: false
  },
  {
    label: "处理意见",
    field: "handleOpinions",
    component: "InputTextArea",
    dynamicDisabled: false
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
  sex: { title: "性别", order: 1, view: "number", type: "number" },
  idNum: { title: "身份证号", order: 2, view: "text", type: "string" },
  birthday: { title: "出生年月", order: 3, view: "date", type: "string" },
  ancestral: { title: "籍贯", order: 4, view: "text", type: "string" },
  nation: { title: "民族", order: 5, view: "number", type: "number" },
  diploma: { title: "文化程度", order: 6, view: "number", type: "number" },
  politicalOutlook: { title: "政治面貌", order: 7, view: "number", type: "number" },
  maritalStatus: { title: "婚姻状态", order: 8, view: "number", type: "number" },
  income: { title: "收入", order: 9, view: "number", type: "number" },
  firstDriverLiocenseDate: { title: "首次获得驾驶证年份", order: 10, view: "date", type: "string" },
  driverLicenseFileid: { title: "上传驾驶证相关证明材料", order: 11, view: "text", type: "string" },
  enterprises: { title: "所属企业", order: 12, view: "text", type: "string" },
  workExperience: { title: "工作经验", order: 13, view: "text", type: "string" },
  driverQualification: { title: "驾驶员资质", order: 14, view: "text", type: "string" },
  driverQualificationFileid: { title: "上传船员证", order: 15, view: "text", type: "string" },
  trafficViolationRecord: { title: "水上交通违法记录", order: 16, view: "number", type: "number" },
  driverPost: { title: "驾驶岗位", order: 17, view: "number", type: "number" },
  recordBookFileid: { title: "船员服务簿", order: 18, view: "text", type: "string" },
  handleState: { title: "处理状态", order: 19, view: "number", type: "number" },
  handleOpinions: { title: "处理意见", order: 20, view: "text", type: "string" }
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
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchemaById;
}
