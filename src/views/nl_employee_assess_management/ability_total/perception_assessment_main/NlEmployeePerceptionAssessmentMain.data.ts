import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
//列表数据
export const columns: BasicColumn[] = [
  {
    title: "测评名称",
    dataIndex: "name",
    customCell: (record, index, column) => {
      if (index == undefined) {
        return;
      }
      index++;
      if (index == 1) {
        return {
          rowspan: 1
        };
      }
      if (index == 2) {
        return {
          rowspan: 4
        };
      }
      if (index > 2 && index <= 5) {
        return {
          rowspan: 0
        };
      }
      return {
        rowspan: 1
      };
    }
  },
  {
    title: "子测评名称",
    dataIndex: "subName"
  },
  {
    title: "测评结果",
    dataIndex: "result"
  },
  {
    title: "上传时间",
    dataIndex: "uploadTime"
  }
];

export const dataSource = [
  {
    key: "1",
    name: "速度感知测试",
    subName: "测试2"
  },
  {
    key: "2",
    name: "距离感知测试",
    subName: "三船测试"
  },
  {
    key: "3",
    name: "距离感知测试",
    subName: "距离测试1"
  },
  {
    key: "4",
    name: "距离感知测试",
    subName: "距离测试2"
  },
  {
    key: "5",
    name: "距离感知测试",
    subName: "距离测试3"
  }, {
    key: "6",
    name: "空间感知测试",
    subName: "当前船与船A夹角误差"
  }, {
    key: "7",
    name: "空间感知测试",
    subName: "船A与船B夹角误差"
  }

];
//查询数据
export const searchFormSchema: FormSchema[] = [];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: "下载说明",
    field: "msg",
    component: "InputTextArea",
    componentProps: {},
    defaultValue: "下载后,请先解压文件,然后打开文件夹,双击文件\"综合感知能力测评系统.exe\"运行",
    dynamicDisabled: true
  },
  {
    label: "下载软件",
    field: "download",
    component: "RadioButtonGroup"
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
  employeeId: { title: "用户id", order: 0, view: "number", type: "number" },
  planId: { title: "测评计划id", order: 1, view: "number", type: "number" },
  speedPerceptionScore: { title: "速度感知能力分数", order: 2, view: "number", type: "number" },
  disPerceptionScore: { title: "距离感知能力分数", order: 3, view: "number", type: "number" },
  spacePerceptionScore: { title: "空间感知能力分数", order: 4, view: "number", type: "number" }
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
