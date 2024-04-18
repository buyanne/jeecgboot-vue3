<template>
  <div>
    <!--引用表格-->
<!--    <JDictSelectTag v-model="queryParam.username" dict-code="sys_user,realname,id" />-->
    <BasicTable @register="registerTable" :rowSelection="rowSelection">
      <!--插槽:table标题-->
      <!--      <template #tableTitle>-->
      <!--        <a-button type="primary" @click="handleAdd" preIcon="ant-design:plus-outlined"> 新增</a-button>-->
      <!--        <a-button type="primary" preIcon="ant-design:export-outlined" @click="onExportXls"> 导出</a-button>-->
      <!--        <j-upload-button type="primary" preIcon="ant-design:import-outlined" @click="onImportXls">导入</j-upload-button>-->
      <!--        <a-dropdown v-if="selectedRowKeys.length > 0">-->
      <!--          <template #overlay>-->
      <!--            <a-menu>-->
      <!--              <a-menu-item key="1" @click="batchHandleDelete">-->
      <!--                <Icon icon="ant-design:delete-outlined" />-->
      <!--                删除-->
      <!--              </a-menu-item>-->
      <!--            </a-menu>-->
      <!--          </template>-->
      <!--          <a-button-->
      <!--            >批量操作-->
      <!--            <Icon icon="mdi:chevron-down" />-->
      <!--          </a-button>-->
      <!--        </a-dropdown>-->
      <!--        &lt;!&ndash; 高级查询 &ndash;&gt;-->
      <!--&lt;!&ndash;        <super-query :config="superQueryConfig" @search="handleSuperQuery" />&ndash;&gt;-->
      <!--      </template>-->
      <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)" />
      </template>
      <!--字段回显插槽-->
      <!--      <template #bodyCell="{ column, record, index, text }"> </template>-->
    </BasicTable>
    <!-- 表单区域 -->
    <NlEmployeeIntviewInfoModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" name="nl_employee_assess_management/nl_employee_interview_info-nlEmployeeIntviewInfo" setup>
  import { ref, reactive, computed, unref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import NlEmployeeIntviewInfoModal from './components/NlEmployeeIntviewInfoModal.vue';
  import { columns, searchFormSchema, superQuerySchema } from './NlEmployeeIntviewInfo.data';
  import { list, deleteOne, batchDelete, getImportUrl, getExportUrl, listWithName } from './NlEmployeeIntviewInfo.api';
  import { downloadFile } from '/@/utils/common/renderUtils';
  import { useUserStore } from '/@/store/modules/user';
  import JDictSelectTag from '@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  const queryParam = reactive<any>({});
  const checkedKeys = ref<Array<string | number>>([]);
  const userStore = useUserStore();
  //注册model
  const [registerModal, { openModal }] = useModal();
  //注册table数据
  const { prefixCls, tableContext, onExportXls, onImportXls } = useListPage({
    tableProps: {
      title: '专家面试预约',
      api: listWithName,
      columns,
      useSearchForm: false,
      canResize: false,
      formConfig: {
        //labelWidth: 120,
        schemas: searchFormSchema,

        autoSubmitOnEnter: true,
        showAdvancedButton: true,
        fieldMapToNumber: [],
        fieldMapToTime: [],
      },
      actionColumn: {
        width: 120,
        fixed: 'right',
      },
      beforeFetch: (params) => {
        return Object.assign(params, queryParam);
      },
    },
    exportConfig: {
      name: '专家面试预约',
      url: getExportUrl,
      params: queryParam,
    },
    importConfig: {
      url: getImportUrl,
      success: handleSuccess,
    },
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
      showFooter: true,
    });
  }
  /**
   * 编辑事件
   */
  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
      showFooter: true,
    });
  }
  /**
   * 详情
   */
  function handleDetail(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
      showFooter: false,
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
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }
  /**
   * 下拉操作栏
   */
  function getDropDownAction(record) {
    return [
      {
        label: '详情',
        onClick: handleDetail.bind(null, record),
      },
      {
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
          placement: 'topLeft',
        },
      },
    ];
  }
</script>

<style scoped></style>
