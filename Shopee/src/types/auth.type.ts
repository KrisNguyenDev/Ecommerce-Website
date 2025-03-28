import { User } from './user.type'
import { ResponseApi } from './responseApi.type'

export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>
