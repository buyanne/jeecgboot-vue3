<template>
  <!--定义表格-->
  <BasicTable @register="registerTable">
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
import { useListPage } from '/@/hooks/system/useListPage';
import {
  previewColumns, previewDataSource
} from "@/views/nl_questionnaire_management/nl_questionnaire_index/components/preview.data";
//定义表格列
const columns: BasicColumn[] = previewColumns
// 列表页面公共参数、方法
const { tableContext } = useListPage({
  designScope: 'basic-table-demo',
  tableProps: {
    title: '指标预览',
    dataSource: previewDataSource,
    columns: columns,
    showActionColumn: false,
    useSearchForm:false,
    pagination:false,
    size:'large'
  },
});

//BasicTable绑定注册
const [registerTable] = tableContext;
/**
 * 操作栏
 */
function getTableAction(record): ActionItem[] {
  return [
    {
      label: '编辑',
      onClick: handleEdit.bind(null, record),
    },
  ];
}

function handleEdit(record) {
  console.log(record);
}
</script>

