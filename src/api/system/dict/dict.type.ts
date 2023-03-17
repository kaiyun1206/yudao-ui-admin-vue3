import request from '@/config/axios'
import type { DictTypeExportReqVO, DictTypePageReqVO, DictTypeVO } from './types'

// 查询字典（精简)列表
export const listSimpleDictTypeApi = () => {
  return request.get({ url: '/system/dict/type/simple/list/all' })
}

// 查询字典列表
export const getDictTypePageApi = (params: DictTypePageReqVO) => {
  return request.get({ url: '/system/dict/type/page', params })
}

// 查询字典详情
export const getDictTypeApi = (id: string) => {
  return request.get({ url: '/system/dict/type/get?id=' + id })
}

// 新增字典
export const createDictTypeApi = (data: DictTypeVO) => {
  return request.post({ url: '/system/dict/type/create', data })
}

// 修改字典
export const updateDictTypeApi = (data: DictTypeVO) => {
  return request.put({ url: '/system/dict/type/update', data })
}

// 删除字典
export const deleteDictTypeApi = (id: string) => {
  return request.delete({ url: '/system/dict/type/delete?id=' + id })
}
// 导出字典类型
export const exportDictTypeApi = (params: DictTypeExportReqVO) => {
  return request.get({ url: '/system/dict/type/export', params })
}
