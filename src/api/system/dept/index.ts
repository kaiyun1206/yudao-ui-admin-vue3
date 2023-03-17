import request from '@/config/axios'

export interface DeptVO {
  id?: string
  name: string
  parentId: string
  status: number
  sort: number
  deptType: number
  deptRemark: string
  leaderUserId: string
  phone: string
  email: string
  createTime: Date
}

export interface DeptPageReqVO {
  name?: string
  status?: number
}

// 查询部门（精简)列表
export const listSimpleDeptApi = async () => {
  return await request.get({ url: '/system/dept/simple/list/all' })
}

// 查询部门列表
export const getDeptPageApi = async (params: DeptPageReqVO) => {
  return await request.get({ url: '/system/dept/list', params })
}

// 查询部门详情
export const getDeptApi = async (id: string) => {
  return await request.get({ url: '/system/dept/get?id=' + id })
}

// 新增部门
export const createDeptApi = async (data: DeptVO) => {
  return await request.post({ url: '/system/dept/create', data: data })
}

// 修改部门
export const updateDeptApi = async (params: DeptVO) => {
  return await request.put({ url: '/system/dept/update', data: params })
}

// 删除部门
export const deleteDeptApi = async (id: string) => {
  return await request.delete({ url: '/system/dept/delete?id=' + id })
}
