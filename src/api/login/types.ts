export type UserLoginVO = {
  username: string
  password: string
  captchaVerification: string
}

export type TokenType = {
  id: string // 编号
  accessToken: string // 访问令牌
  refreshToken: string // 刷新令牌
  userId: string // 用户编号
  userType: number //用户类型
  clientId: string //客户端编号
  expiresTime: number //过期时间
}

export type UserVO = {
  id: string
  username: string
  nickname: string
  deptId: string
  email: string
  mobile: string
  sex: number
  avatar: string
  loginIp: string
  loginDate: string
}

export type UserInfoVO = {
  permissions: []
  roles: []
  user: {
    avatar: string
    id: string
    nickname: string
  }
}

export type TentantNameVO = {
  name: string
}
