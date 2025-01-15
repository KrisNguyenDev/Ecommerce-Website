import z from 'zod'

export const LoginBody = z
  .object({
    name: z
      .string({
        required_error: 'Tên không được để trống',
        invalid_type_error: 'Tên phải là chuỗi',
      })
      .trim()
      .min(2, 'Tên phải có ít nhất 2 ký tự')
      .max(256, 'Tên không được vượt quá 256 ký tự'),
    class: z.number({
      required_error: 'Tên không được để trống',
      invalid_type_error: 'Tên phải là chuỗi',
    }),
    email: z
      .string({
        required_error: 'Class không được để trống',
        invalid_type_error: 'Class phải là chuỗi',
      })
      .email('Email không đúng định dạng'),
    password: z
      .string({
        required_error: 'Mật khẩu không được để trống',
        invalid_type_error: 'Mật khẩu phải là chuỗi',
      })
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .max(100, 'Mật khẩu không được vượt quá 100 ký tự'),
    confirmPassword: z
      .string({
        required_error: 'Xác nhận mật khẩu không được để trống',
        invalid_type_error: 'Xác nhận mật khẩu phải là chuỗi',
      })
      .min(6, 'Xác nhận mật khẩu phải có ít nhất 6 ký tự')
      .max(100, 'Xác nhận mật khẩu không được vượt quá 100 ký tự'),
  })
  .strict('Dữ liệu không hợp lệ')
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Mật khẩu xác nhận không khớp với mật khẩu',
        path: ['confirmPassword'],
      })
    }
  })

export type LoginType = z.TypeOf<typeof LoginBody>
