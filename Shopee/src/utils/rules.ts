export const rules = {
  email: {
    required: { value: true, message: 'Email là bắt buộc' },
    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email không hợp lệ' },
    minLength: { value: 6, message: 'Email không được ít hơn 6 ký tự' },
    maxLength: { value: 160, message: 'Email không được vượt quá 160 ký tự' },
  },
  password: {
    required: { value: true, message: 'Password là bắt buộc' },
    minLength: { value: 6, message: 'Password không được ít hơn 6 ký tự' },
    maxLength: { value: 160, message: 'Password không được vượt quá 160 ký tự' },
  },
  confirm_password: {
    required: { value: true, message: 'Confirm password là bắt buộc' },
    minLength: { value: 6, message: 'Password không được ít hơn 6 ký tự' },
    maxLength: { value: 160, message: 'Password không được vượt quá 160 ký tự' },
  },
}
