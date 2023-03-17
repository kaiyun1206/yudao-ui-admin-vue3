import request from '@/config/axios'

export interface MenuVO {
  id: string
  name: string
  permission: string
  type: number
  sort: number
  parentId: string
  path: string
  icon: string
  component: string
  componentName?: string
  status: number
  visible: boolean
  keepAlive: boolean
  alwaysShow?: boolean
  remark: string
  createTime: Date
}

export interface MenuPageReqVO {
  name?: string
  status?: number
}

// 查询菜单（精简）列表
export const listSimpleMenusApi = () => {
  return request.get({ url: '/system/menu/simple/list/all' })
}

// 查询菜单列表
export const getMenuListApi = (params: MenuPageReqVO) => {
  return request.get({ url: '/system/menu/list', params })
}

// 获取菜单详情
export const getMenuApi = (id: string) => {
  return request.get({ url: '/system/menu/get?id=' + id })
}

// 新增菜单
export const createMenuApi = (data: MenuVO) => {
  return request.post({ url: '/system/menu/create', data })
}

// 修改菜单
export const updateMenuApi = (data: MenuVO) => {
  return request.put({ url: '/system/menu/update', data })
}

// 删除菜单
export const deleteMenuApi = (id: string) => {
  return request.delete({ url: '/system/menu/delete?id=' + id })
}
