import request from '@/config/axios'

export interface SmsLogVO {
  id: string | null
  channelId: string | null
  channelCode: string
  templateId: string | null
  templateCode: string
  templateType: number | null
  templateContent: string
  templateParams: Map<string, object> | null
  apiTemplateId: string
  mobile: string
  userId: string | null
  userType: number | null
  sendStatus: number | null
  sendTime: Date | null
  sendCode: number | null
  sendMsg: string
  apiSendCode: string
  apiSendMsg: string
  apiRequestId: string
  apiSerialNo: string
  receiveStatus: number | null
  receiveTime: Date | null
  apiReceiveCode: string
  apiReceiveMsg: string
  createTime: Date | null
}

// 查询短信日志列表
export const getSmsLogPage = (params: PageParam) => {
  return request.get({ url: '/system/sms/log/page', params })
}

// 导出短信日志
export const exportSmsLog = (params) => {
  return request.download({ url: '/system/sms/log/export/excel', params })
}
