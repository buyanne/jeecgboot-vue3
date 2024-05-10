<template>
  <div>
    <!--引用表格-->
    <BasicTable @register="registerTable" >
      <!--插槽:table标题-->
      <template #tableTitle>
        <a-button type="primary" @click="handleAdd" preIcon="ant-design:plus-outlined">
          下载测评软件
        </a-button>
        <!-- 高级查询 -->
      </template>

    </BasicTable>
    <!-- 表单区域 -->
    <NlEmployeePerceptionAssessmentMainModal @register="registerModal"
                                             @success="handleSuccess"></NlEmployeePerceptionAssessmentMainModal>
  </div>
</template>

<script lang="ts" name="perception_assessment_main-nlEmployeePerceptionAssessmentMain" setup>
import { ref, reactive, computed, unref } from "vue";
import { BasicTable, useTable, TableAction } from "/@/components/Table";
import { useModal } from "/@/components/Modal";
import { useListPage } from "/@/hooks/system/useListPage";
import NlEmployeePerceptionAssessmentMainModal
  from "./components/NlEmployeePerceptionAssessmentMainModal.vue";
import {
  dataSource,
  columns,
  searchFormSchema,
  superQuerySchema
} from "./NlEmployeePerceptionAssessmentMain.data";
import {
  list,
  deleteOne,
  batchDelete,
  getImportUrl,
  getExportUrl
} from "./NlEmployeePerceptionAssessmentMain.api";
import { downloadFile } from "/@/utils/common/renderUtils";
import { useUserStore } from "/@/store/modules/user";

const queryParam = reactive<any>({});
const checkedKeys = ref<Array<string | number>>([]);
const userStore = useUserStore();
//注册model
const [registerModal, { openModal }] = useModal();
//注册table数据
const { prefixCls, tableContext, onExportXls, onImportXls } = useListPage({
  designScope: "basic-table-demo",
  tableProps: {
    title: "综合感知测评",
    dataSource: dataSource,
    columns,
    showActionColumn: false,
    useSearchForm:false,
    pagination:false,
    size:'large'
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
