import { ResponseApi } from '@/types/responseApi.type'
import axios, { AxiosError, HttpStatusCode } from 'axios'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<T>(error: unknown): error is AxiosError<T> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export function formatCurrency(price: string | number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(Number(price))
}

export function truncateText(text: string, maxLength: number = 10): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export function handleAxiosUnprocessableEntityError<T extends ResponseApi<unknown>, U>(
  error: unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any,
): void {
  if (isAxiosUnprocessableEntityError<T>(error)) {
    const formError = error.response?.data.data
    if (formError) {
      Object.entries(formError).forEach(([key, value]) => {
        form.setError(key as keyof U, { type: 'Server', message: value })
      })
    }
  }
}
