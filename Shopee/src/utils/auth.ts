const ACCESS_TOKEN = 'access_token'

export const setAccessTokenToLS = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken)
}

export const clearAccessTokenFromLS = () => {
  localStorage.removeItem(ACCESS_TOKEN)
}

export const getAccessTokenFromLS = () => {
  localStorage.getItem(ACCESS_TOKEN) || ''
}
