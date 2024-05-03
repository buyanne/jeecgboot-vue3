<template>
  <div>
    <a-button style="font-size:15px" v-if="unref(isPreview)" type="primary" @click="handleBack">
      ← 返回指标管理
    </a-button>
    <!--引用表格-->
    <BasicTable v-if="!unref(isPreview)" @register="registerTable" :rowSelection="rowSelection">
      <!--插槽:table标题-->
      <template #tableTitle>
        <a-button v-if="!unref(isPreview)" type="primary" @click="handlePreview">
          预览
        </a-button>


        <a-button type="primary" @click="handleAdd" preIcon="ant-design:plus-outlined">
          新增问卷指标
        </a-button>
        <!--                  <a-button  type="primary" preIcon="ant-design:export-outlined" @click="onExportXls"> 导出</a-button>-->
        <!--                  <j-upload-button  type="primary" preIcon="ant-design:import-outlined" @click="onImportXls">导入</j-upload-button>-->
        <a-dropdown v-if="selectedRowKeys.length > 0">
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="batchHandleDelete">
                <Icon icon="ant-design:delete-outlined"></Icon>
                删除
              </a-menu-item>
            </a-menu>
          </template>
          <a-button>批量操作
            <Icon icon="mdi:chevron-down"></Icon>
          </a-button>
        </a-dropdown>
        <!-- 高级查询 -->
        <!--        <super-query :config="superQueryConfig" @search="handleSuperQuery" />-->
      </template>
      <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)"
                     :dropDownActions="getDropDownAction(record)" />
      </template>
      <!--字段回显插槽-->
      <template v-slot:bodyCell="{ column, record, index, text }">
      </template>

    </BasicTable>
    <!-- 表单区域 -->
    <NlQuestionnaireIndexModal @register="registerModal"
                               @success="handleSuccess"></NlQuestionnaireIndexModal>
    <!--    抽屉-->
    <IndexDrawer @register="registerDrawer" @success="handleSuccess"></IndexDrawer>
    <PreviewTable v-if="unref(isPreview)">

    </PreviewTable>

  </div>
</template>

<script lang="ts" name="nl_questionnaire_index-nlQuestionnaireIndex" setup>
import { ref, reactive, computed, unref } from "vue";
import { BasicTable, useTable, TableAction } from "/@/components/Table";
import { useModal } from "/@/components/Modal";
import { useListPage } from "/@/hooks/system/useListPage";
import NlQuestionnaireIndexModal from "./components/NlQuestionnaireIndexModal.vue";
import { columns, searchFormSchema, superQuerySchema } from "./NlQuestionnaireIndex.data";
/*
* 添加抽屉
* */
import IndexDrawer from "./components/IndexDrawer.vue";
import { useDrawer } from "@/components/Drawer";

// 添加预览
import PreviewTable from "./components/PreviewTable.vue";

import {
  list,
  deleteOne,
  batchDelete,
  getImportUrl,
  getExportUrl
} from "./NlQuestionnaireIndex.api";
import { useUserStore } from "/@/store/modules/user";
import JAddInput from "@/components/Form/src/jeecg/components/JAddInput.vue";


const queryParam = reactive<any>({});
const checkedKeys = ref<Array<string | number>>([]);
const userStore = useUserStore();
// 注册drawer
const [registerDrawer, { openDrawer }] = useDrawer();

//注册model
const [registerModal, { openModal }] = useModal();
//注册table数据
const { prefixCls, tableContext, onExportXls, onImportXls } = useListPage({
  tableProps: {
    title: "nl_questionnaire_index",
    api: list,
    columns,
    canResize: false,
    useSearchForm: false,
    isTreeTable: true,
    pagination: false,
    size: "large",
    striped: true,
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
    name: "nl_questionnaire_index",
    url: getExportUrl,
    params: queryParam
  },
  importConfig: {
    url: getImportUrl,
    success: handleSuccess
  }
});
let isPreview = ref(false);

const [registerTable, { reload }, { rowSelection, selectedRowKeys }] = tableContext;

// 高级查询配置
const superQueryConfig = reactive(superQuerySchema);

// 处理预览
function handlePreview() {
  console.log(unref(isPreview.value));
  isPreview.value = !isPreview.value;
  console.log(isPreview.value);
}

function handleBack() {
  // console.log(unref(isPreview));
  isPreview.value = !isPreview.value;
}

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
  // openModal(true, {
  //   isUpdate: false,
  //   showFooter: true
  // });
  openDrawer(true, {
    isUpdate: false,
    showFooter: true
  });
}

/**
 * 编辑事件
 */
function handleEdit(record: Recordable) {
  // openModal(true, {
  //   record,
  //   isUpdate: true,
  //   showFooter: true
  // });
  openDrawer(true, {
    record,
    isUpdate: true,
    showFooter: true
  });
}

/**
 * 添加下级
 */
function handleAddWithParent(record: Recordable) {

  // openModal(true, {
  //   record: {
  //     parentId: record.id,
  //     addType: 1
  //   },
  //   isUpdate: false,
  //   showFooter: true
  // });
  openDrawer(true, {
    record: {
      parentId: record.id,
      addType: 1
    },
    isUpdate: false,
    showFooter: true
  });
}

/**
 * 详情
 */
function handleDetail(record: Recordable) {
  // openModal(true, {
  //   record,
  //   isUpdate: true,
  //   showFooter: false
  // });
  openDrawer(true, {
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
    // {
    //   label: "编辑",
    //   onClick: handleEdit.bind(null, record)
    // },
    {
      label: "详情",
      onClick: handleDetail.bind(null, record)
    }
  ];
}

/**
 * 下拉操作栏
 */
function getDropDownAction(record) {
  return [
    // {
    //   label: "详情",
    //   onClick: handleDetail.bind(null, record)
    // },
    {
      label: "编辑",
      onClick: handleEdit.bind(null, record)
    },
    {
      label: "添加下级",
      onClick: handleAddWithParent.bind(null, record)
    },
    {
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
