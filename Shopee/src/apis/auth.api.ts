import { RegisterType } from '@/types/register.type'
import http from '../utils/http'
import { LoginType } from '@/types/login.type'
import { AuthResponse } from '@/types/auth.type'

export const register = (body: RegisterType) => {
  return http.post<AuthResponse>('/register', body)
}

export const login = (body: LoginType) => {
  return http.post<AuthResponse>('/login', body)
}

export const logout = () => {
  return http.post('/logout')
}
