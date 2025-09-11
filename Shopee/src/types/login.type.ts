import z from 'zod'
import { ResponseApi } from './responseApi.type'

export type LoginType = {
  email: string
  password: string
}

export type LoginResponse = ResponseApi<LoginType>

export const LoginRules: z.ZodType<LoginType> = z
  .object({
    email: z
      .string({
        required_error: 'email không được để trống',
        invalid_type_error: 'email phải là chuỗi',
      })
      .email('Email không đúng định dạng'),
    password: z
      .string({
        required_error: 'Mật khẩu không được để trống',
        invalid_type_error: 'Mật khẩu phải là chuỗi',
      })
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .max(100, 'Mật khẩu không được vượt quá 100 ký tự'),
  })
  .strict('Dữ liệu không hợp lệ')
