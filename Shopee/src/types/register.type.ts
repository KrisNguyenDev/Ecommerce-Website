import z from 'zod'
import { ResponseApi } from './responseApi.type'

export const RegisterBody = z
  .object({
    email: z
      .string({
        required_error: 'email không được để trống',
        invalid_type_error: 'email phải là chuỗi',
      })
      .email('Email không đúng định dạng')
      .min(5, 'Email phải có ít nhất 6 ký tự')
      .max(160, 'Email không được vượt quá 160 ký tự'),
    password: z
      .string({
        required_error: 'Mật khẩu không được để trống',
        invalid_type_error: 'Mật khẩu phải là chuỗi',
      })
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .max(160, 'Mật khẩu không được vượt quá 160 ký tự'),
    confirmPassword: z
      .string({
        required_error: 'Xác nhận mật khẩu không được để trống',
        invalid_type_error: 'Xác nhận mật khẩu phải là chuỗi',
      })
      .min(6, 'Xác nhận mật khẩu phải có ít nhất 6 ký tự')
      .max(100, 'Xác nhận mật khẩu không được vượt quá 100 ký tự'),
  })
  .strict('Dữ liệu không hợp lệ')
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Mật khẩu không khớp',
        path: ['confirmPassword'],
      })
    }
  })

export type RegisterType = z.TypeOf<typeof RegisterBody>

export type RegisterResponse = ResponseApi<Omit<RegisterType, 'confirmPassword'>>
