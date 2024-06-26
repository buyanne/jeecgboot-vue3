<template>
  <div>
    <PyschologyQuestionListForm
    :listId="listId"
    :isPreview="isPreview"
    style="background-color: white"
    >
    </PyschologyQuestionListForm>

  </div>
</template>

<script lang="ts" name="nl_pyschology_reply-nlEmployeePyschologyRequestReply" setup>
import { ref, reactive, computed, unref } from "vue";
import { BasicTable, useTable, TableAction } from "/@/components/Table";
import { useModal } from "/@/components/Modal";
import { useListPage } from "/@/hooks/system/useListPage";


import {
  columns,
  searchFormSchema,
  superQuerySchema
} from "./NlEmployeePyschologyRequestReply.data";
import {
  list,
  deleteOne,
  batchDelete,
  getImportUrl,
  getExportUrl
} from "./NlEmployeePyschologyRequestReply.api";
import { useUserStore } from "/@/store/modules/user";

import PyschologyQuestionListForm  from './components/PyschologyQuestionListForm.vue'
let listId = ref({});
let isPreview = ref(false);


const queryParam = reactive<any>({});
const checkedKeys = ref<Array<string | number>>([]);
const userStore = useUserStore();
//注册model
const [registerModal, { openModal }] = useModal();
//注册table数据
const { prefixCls, tableContext, onExportXls, onImportXls } = useListPage({
  tableProps: {
    title: "心理状况回答表",
    api: list,
    columns,
    canResize: false,
    formConfig: {
      //labelWidth: 120,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true,
      showAdvancedButton: true,
      fieldMapToNumber: [],
      fieldMapToTime: []
    },
    actionColumn: {
      width: 120,
      fixed: "right"
    },
    beforeFetch: (params) => {
      return Object.assign(params, queryParam);
    }
  },
  exportConfig: {
    name: "心理状况回答表",
    url: getExportUrl,
    params: queryParam
  },
  importConfig: {
    url: getImportUrl,
    success: handleSuccess
  }
});

const [registerTable, { reload }, { rowSelection, selectedRowKeys }] = tableContext;

// 高级查询配置
const superQueryConfig = reactive(superQuerySchema);

/**
 * 高级查询事件
 */
function handleSuperQuery(params) {
  Object.keys(params).map((k) => {
    queryParam[k] = params[k];
  });
  reload();
}

/**
 * 新增事件
 */
function handleAdd() {
  openModal(true, {
    isUpdate: false,
    showFooter: true
  });
}

/**
 * 编辑事件
 */
function handleEdit(record: Recordable) {
  openModal(true, {
    record,
    isUpdate: true,
    showFooter: true
  });
}

/**
 * 详情
 */
function handleDetail(record: Recordable) {
  openModal(true, {
    record,
    isUpdate: true,
    showFooter: false
  });
}

/**
 * 删除事件
 */
async function handleDelete(record) {
  await deleteOne({ id: record.id }, handleSuccess);
}

/**
 * 批量删除事件
 */
async function batchHandleDelete() {
  await batchDelete({ ids: selectedRowKeys.value }, handleSuccess);
}

/**
 * 成功回调
 */
function handleSuccess() {
  (selectedRowKeys.value = []) && reload();
}

/**
 * 操作栏
 */
function getTableAction(record) {
  return [
    {
      label: "编辑",
      onClick: handleEdit.bind(null, record)
    }
  ];
}

/**
 * 下拉操作栏
 */
function getDropDownAction(record) {
  return [
    {
      label: "详情",
      onClick: handleDetail.bind(null, record)
    }, {
      label: "删除",
      popConfirm: {
        title: "是否确认删除",
        confirm: handleDelete.bind(null, record),
        placement: "topLeft"
      }
    }
  ];
}


</script>

<style scoped>

</style>
