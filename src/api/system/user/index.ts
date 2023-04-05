import request from '@/config/axios'

export interface UserVO {
  id: string
  username: string
  nickname: string
  deptId: string
  postIds: string[]
  email: string
  mobile: string
  sex: number
  avatar: string
  loginIp: string
  status: number
  remark: string
  userType: number
  loginDate: Date
  createTime: Date
}

// 查询用户管理列表
export const getUserPage = (params: PageParam) => {
  return request.get({ url: '/system/user/page', params })
}

// 查询用户详情
export const getUser = (id: string) => {
  return request.get({ url: '/system/user/get?id=' + id })
}

// 新增用户
export const createUser = (data: UserVO) => {
  return request.post({ url: '/system/user/create', data })
}

// 修改用户
export const updateUser = (data: UserVO) => {
  return request.put({ url: '/system/user/update', data })
}

// 删除用户
export const deleteUser = (id: string) => {
  return request.delete({ url: '/system/user/delete?id=' + id })
}

// 导出用户
export const exportUser = (params) => {
  return request.download({ url: '/system/user/export', params })
}

// 下载用户导入模板
export const importUserTemplate = () => {
  return request.download({ url: '/system/user/get/import/template' })
}

// 用户密码重置
export const resetUserPwd = (id: string, password: string) => {
  const data = {
    id,
    password
  }
  return request.put({ url: '/system/user/update/password', data: data })
}

// 用户状态修改
export const updateUserStatus = (id: string, status: number) => {
  const data = {
    id,
    status
  }
  return request.put({ url: '/system/user/update/status', data: data })
}

// 获取用户精简信息列表
export const getSimpleUserList = (): Promise<UserVO[]> => {
  return request.get({ url: '/system/user/simple/list/all' })
}
