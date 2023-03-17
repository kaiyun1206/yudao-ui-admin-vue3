export type DictTypeVO = {
  id: string
  name: string
  type: string // 英文编码 common_status
  status: number
  remark: string
  dataType: number // 字典数据值的类型
  parentId: string
  createTime: Date
}

export type DictTypePageReqVO = {
  name: string
  type: string
  status: number
  createTime: Date[]
}

export type DictTypeExportReqVO = {
  name: string
  type: string
  status: number
  createTime: Date[]
}

export type DictDataVO = {
  id: string
  sort: number
  label: string
  value: string
  dictType: string
  status: number
  colorType: string
  cssClass: string
  remark: string
  parentId: string
  createTime: Date
}
export type DictDataPageReqVO = {
  label: string
  dictType: string
  status: number
}

export type DictDataExportReqVO = {
  label: string
  dictType: string
  status: number
}
