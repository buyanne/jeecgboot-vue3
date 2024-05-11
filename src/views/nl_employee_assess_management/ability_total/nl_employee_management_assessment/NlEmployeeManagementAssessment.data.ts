import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
//列表数据
export const columns: BasicColumn[] = [
  {
    title: "employeeId",
    align: "center",
    dataIndex: "employeeId",
    ifShow: false
  },
  {
    title: "用户名",
    align: "center",
    dataIndex: "employeeName"
  },
  {
    title: "身份证号",
    align: "center",
    dataIndex: "idNum"
  },

  {
    title: "专家",
    align: "center",
    dataIndex: "specialistName"
  },
  {
    title: "测评计划id",
    align: "center",
    dataIndex: "planId",
    ifShow: false
  },
  {
    title: "领导能力打分",
    align: "center",
    dataIndex: "leadershipScore"
  },
  {
    title: "组织协调能力打分",
    align: "center",
    dataIndex: "orgCoordinationScore"
  },
  {
    title: "沟通交流能力打分",
    align: "center",
    dataIndex: "communicationScore"
  },
  {
    title: "specialistId",
    align: "center",
    dataIndex: "specialistId",
    ifShow: false
  }
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "姓名",
    field: "employeeName",
    component: "Input",
    componentProps: {}
  }
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: "姓名",
    field: "employeeId",
    component: "JSelectUser",
    componentProps: {
      labelKey: "realname",
      rowKey: "id"
    },
    dynamicDisabled: true
  }
  ,
  {
    label: "领导能力打分",
    field: "leadershipScore",
    component: "InputNumber"
  },
  {
    label: "组织协调能力打分",
    field: "orgCoordinationScore",
    component: "InputNumber"
  },
  {
    label: "沟通交流能力打分",
    field: "communicationScore",
    component: "InputNumber"
  },
  {
    label: "专家",
    field: "specialistId",
    component: "JSearchSelect",
    componentProps: {
      dict: "nl_specialist_info,name,id"
    },
    dynamicDisabled: true
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
  employeeId: { title: "employeeId", order: 0, view: "text", type: "string" },
  planId: { title: "测评计划id", order: 1, view: "number", type: "number" },
  leadershipScore: { title: "领导能力打分", order: 2, view: "number", type: "number" },
  orgCoordinationScore: { title: "组织协调能力打分", order: 3, view: "number", type: "number" },
  communicationScore: { title: "沟通交流能力打分", order: 4, view: "number", type: "number" },
  specialistId: { title: "specialistId", order: 5, view: "text", type: "string" }
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
