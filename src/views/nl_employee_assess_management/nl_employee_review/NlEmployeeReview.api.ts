import { defHttp } from '/@/utils/http/axios';
import { useMessage } from '/@/hooks/web/useMessage';

const { createConfirm } = useMessage();

enum Api {
  list = '/nl_employee_review/nlEmployeeReview/list',
  listReviewInfo = '/nl_employee_review/nlEmployeeReview/listReviewInfo',
  save = '/nl_employee_review/nlEmployeeReview/add',
  edit = '/nl_employee_review/nlEmployeeReview/edit',
  deleteOne = '/nl_employee_review/nlEmployeeReview/delete',
  deleteBatch = '/nl_employee_review/nlEmployeeReview/deleteBatch',
  importExcel = '/nl_employee_review/nlEmployeeReview/importExcel',
  exportXls = '/nl_employee_review/nlEmployeeReview/exportXls',
}

/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;
/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 列表接口
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });

export const listReviewInfo = (params) => defHttp.get({ url: Api.listReviewInfo, params });

/**
 * 删除单个
 */
export const deleteOne = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.deleteOne, params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};
/**
 * 批量删除
 * @param params
 */
export const batchDelete = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp
        .delete(
          {
            url: Api.deleteBatch,
            data: params,
          },
          { joinParamsToUrl: true }
        )
        .then(() => {
          handleSuccess();
        });
    },
  });
};
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdate = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};
