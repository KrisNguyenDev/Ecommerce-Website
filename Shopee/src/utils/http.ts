import { AuthResponse } from '@/types/auth.type'
import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { clearAccessTokenFromLS, getAccessTokenFromLS, setAccessTokenToLS } from './auth'

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
      timeout: 10000,
    })
    this.instance.interceptors.request.use((config) => {
      if (this.accessToken) config.headers.Authorization = this.accessToken
      return config
    })

    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/login' || url === '/register') {
          this.accessToken = (response.data as AuthResponse).data?.access_token
          this.accessToken && setAccessTokenToLS(this.accessToken)
        }
        if (url === '/logout') {
          this.accessToken = ''
          clearAccessTokenFromLS()
        }

        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const errorMessage = data?.message || error.message
          toast.error(errorMessage)
        }
        return Promise.reject(error)
      },
    )
  }
}

const http = new Http().instance

export default http
