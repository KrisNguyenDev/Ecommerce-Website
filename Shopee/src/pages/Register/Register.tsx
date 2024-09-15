import registerBg from '@/assets/Image/registerBg.png'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { rules } from '@/utils/rules'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface formData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>()

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-debugger
    debugger
    console.log(data)
  })
  console.log(errors)
  return (
    <div
      className="bg-orange"
      style={{
        backgroundImage: `url(${registerBg})`,
        backgroundRepeat: 'no-repeat',
        height: '600px',
        backgroundPositionX: '50%',
      }}
    >
      <div className="max-w-7xl mx-auto p-4 h-full grid grid-cols-1 lg:grid-cols-3 items-center">
        <form className="lg:col-start-3" onSubmit={onSubmit} noValidate>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Đăng ký</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" {...register('email', rules.email)} />
                <div className="text-sm text-red-500 min-h-[20px]">{errors.email?.message}</div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  {...register('password', { required: { value: true, message: 'Password là bắt buộc' } })}
                />
                <div className="text-sm text-red-500 min-h-[20px]">{errors.password?.message}</div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm_password">Confirm password</Label>
                <Input
                  type="password"
                  {...register('confirm_password', {
                    required: { value: true, message: 'Confirm password là bắt buộc' },
                  })}
                />
                <div className="text-sm text-red-500 min-h-[20px]">{errors.confirm_password?.message}</div>
              </div>
              <div className="flex items-center justify-center text-sm">
                <span className="text-gray-300">Bạn đã có tài khoản?</span>
                <Link to="/login" className="text-orange">
                  Đăng nhập
                </Link>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Đăng ký</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}
