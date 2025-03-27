import { User } from '@/types/user.type'

const ACCESS_TOKEN = 'access_token'
const USER = 'user'

export const setAccessTokenToLS = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken)
}

export const clearAccessTokenFromLS = () => {
  localStorage.removeItem(ACCESS_TOKEN)
  localStorage.removeItem(USER)
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem(ACCESS_TOKEN) || ''
}

export const getUserFromLS = () => {
  return JSON.parse(localStorage.getItem(USER) || '{}')
}

export const setUserToLS = (user: User) => {
  localStorage.setItem(USER, JSON.stringify(user))
}
