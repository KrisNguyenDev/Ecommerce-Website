import { AuthResponse } from '@/types/auth.type'
import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { clearAccessTokenFromLS, getAccessTokenFromLS, setAccessTokenToLS, setUserToLS } from './auth'
import { PATH } from '@/constants/path'

class Http {
  instance: AxiosInstance
  private accessToken?: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 1000000,
    })

    // request interceptor
    this.instance.interceptors.request.use((config) => {
      if (this.accessToken) config.headers.Authorization = this.accessToken
      return config
    })

    // response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/login' || url === '/register') {
          const authResponse = response.data as AuthResponse
          this.accessToken = authResponse.data?.access_token
          this.accessToken && setAccessTokenToLS(this.accessToken)
          authResponse.data?.user && setUserToLS(authResponse.data.user)
        }
        if (url === '/logout') {
          this.accessToken = ''
          clearAccessTokenFromLS()
        }

        return response
      },
      (error: AxiosError) => {
        switch (error.response?.status) {
          case HttpStatusCode.Unauthorized: {
            this.accessToken = ''
            clearAccessTokenFromLS()
            window.location.replace(PATH.LOGIN)
            toast.error('Phiên đăng nhập đã hết, làm ơn đăng nhập lại.')
            break
          }
          case HttpStatusCode.InternalServerError: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const data: any | undefined = error.response?.data
            const errorMessage = data?.message || error.message
            toast.error(errorMessage)
            break
          }
          default:
          // Default code block
        }
        return Promise.reject(error)
      },
    )
  }
}

const http = new Http().instance

export default http
