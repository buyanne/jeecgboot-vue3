import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import { render } from "/@/utils/common/renderUtils";

export const previewColumns: BasicColumn[] = [
  {
    title: "一级指标",
    dataIndex: "first_index",
    customCell: (record, index, column) => {
      // colSpan: index < 4 ? 1 : 5,
      if (index == undefined) {
        return;
      }
      index++;
      // 生理
      if (index === 1) {
        return {
          rowspan: 1
        };
      }
      // 技能
      if (index === 2) {
        return {
          rowspan: 7
        };
      }
      if (index <= 8) {
        return {
          rowspan: 0
        };
      }
      // 心理
      if (index == 9) {
        return {
          rowspan: 14
        };
      }
      if (index <= 22) {
        return {
          rowspan: 0
        };
      }
      if(index==23){
        return {
          rowspan:4
        }
      }
      return {
        rowspan:0
      }

    }
    // customRender: ({ text, record, index, column }) => {
    //   // return index < 4?text:`${record.name}/${record.age}/${record.address}/${record.phone}`
    // }
  },
  {
    title: "二级指标",
    dataIndex: "second_index",
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
          rowspan: 6
        };
      }
      if (index <= 7) {
        return {
          rowspan: 0
        };
      }
      if (index == 8) {
        return {
          rowspan: 1,
          colspan: 2
        };
      }
      if(index==9){
        return {
          rowspan:2
        }
      }
      if(index==10){
        return {
          rowspan:0
        }
      }
      if(index==11){
        return {
          rowspan:2
        }
      }
      if(index==12){
        return {
          rowspan:0
        }
      }
      if(index==13){
        return {
          rowspan:2
        }
      }
      if(index==14){
        return {
          rowspan:0
        }
      }
      if(index==15){
        return {
          rowspan:2
        }
      }
      if(index==16){
        return {
          rowspan:0
        }
      }
      if(index==17){
        return {
          rowspan:2
        }
      }
      if(index==18){
        return {
          rowspan:0
        }
      }
      if(index==19){
        return {
          rowspan:2
        }
      }
      if(index==20){
        return {
          rowspan:0
        }
      }
      if(index==21){
        return {
          rowspan:2
        }
      }
      if(index==22){
        return {
          rowspan:0
        }
      }
      if(index==23||index==24){
        return {
          rowspan:1,
          colspan:2,
        }
      }
      if(index==25){
        return {
          rowspan:2
        }
      }
      return {
        rowspan:0
      }

    }
  },
  {
    title: "三级指标",
    dataIndex: "third_index",
    customCell: (record, index, column) => {
      if (index == undefined) {
        return;
      }
      index++;
      if (index == 8) {
        return { colspan: 0 };
      }
      if(index==23||index==24){
        return {
          colspan:0,
        }
      }
    }
  }
];

export const previewDataSource = [
  {
    key: "1",
    first_index: "生理",
    second_index: "体征",
    third_index: "睡眠质量"
  },
  {
    key: "2",
    first_index: "技能",
    second_index: "专业知识",
    third_index: "避碰与信号（一、二类）"
  },
  {
    key: "3",
    first_index: "技能",
    second_index: "专业知识",
    third_index: "航道与引航"
  },
  {
    key: "4",
    first_index: "技能",
    second_index: "专业知识",
    third_index: "船舶管理"
  },
  {
    key: "5",
    first_index: "技能",
    second_index: "专业知识",
    third_index: "船舶驾驶与管理（二类）"
  },
  {
    key: "6",
    first_index: "技能",
    second_index: "专业知识",
    third_index: "旅客安全保障能力"
  },
  {
    key: "7",
    first_index: "技能",
    second_index: "专业知识",
    third_index: "船舶操纵"
  },
  {
    key: "8",
    first_index: "技能",
    second_index: "操作能力",
    third_index: "操作能力"
  },
  {
    key: "9",
    first_index: "心理状况",
    second_index: "情绪稳定",
    third_index: "神经质"
  },
  {
    key: "10",
    first_index: "心理状况",
    second_index: "情绪稳定",
    third_index: "情绪策略"
  },
  {
    key: "11",
    first_index: "心理状况",
    second_index: "情绪调控力",
    third_index: "情绪意识"
  },
  {
    key: "12",
    first_index: "心理状况",
    second_index: "情绪调控力",
    third_index: "冲动控制"
  },
  {
    key: "13",
    first_index: "心理状况",
    second_index: "工作风格",
    third_index: "尽责性"
  },
  {
    key: "14",
    first_index: "心理状况",
    second_index: "工作风格",
    third_index: "工作动机"
  },
  {
    key: "15",
    first_index: "心理状况",
    second_index: "人际合作",
    third_index: "宜人性"
  },
  {
    key: "16",
    first_index: "心理状况",
    second_index: "人际合作",
    third_index: "人际灵活性"
  },
  {
    key: "17",
    first_index: "心理状况",
    second_index: "情绪状态",
    third_index: "焦虑状态"
  },
  {
    key: "18",
    first_index: "心理状况",
    second_index: "情绪状态",
    third_index: "抑郁状态"
  },
  {
    key: "19",
    first_index: "心理状况",
    second_index: "应激状态",
    third_index: "工作倦怠"
  },
  {
    key: "20",
    first_index: "心理状况",
    second_index: "应激状态",
    third_index: "压力知觉"
  },
  {
    key: "21",
    first_index: "心理状况",
    second_index: "工作状态",
    third_index: "工作氛围"
  },
  {
    key: "22",
    first_index: "心理状况",
    second_index: "工作状态",
    third_index: "工作-家庭冲突"
  },
  {
    key: "23",
    first_index: "思想表现",
    second_index: "思想状况",
    third_index: "思想状况"
  },
  {
    key: "24",
    first_index: "思想表现",
    second_index: "日常表现",
    third_index: "日常表现"
  },
  {
    key: "25",
    first_index: "思想表现",
    second_index: "安全文化",
    third_index: "企业安全文化"
  },
  {
    key: "26",
    first_index: "思想表现",
    second_index: "安全文化",
    third_index: "安全意识"
  }
];
