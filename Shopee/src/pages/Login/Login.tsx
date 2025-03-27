import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginBody, LoginResponse, LoginType } from '@/types/login.type'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '@/apis/auth.api'
import { useMutation } from '@tanstack/react-query'
import { handleAxiosUnprocessableEntityError } from '@/utils/utils'
import useAppStore from '@/store/useAppStore'
import { PATH } from '@/constants/path'

export default function Login() {
  const { setIsAuthenticated, setUser } = useAppStore()
  const navigate = useNavigate()

  const form = useForm<LoginType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess(data) {
      setIsAuthenticated(true)
      setUser(data.data.data?.user)
      navigate(PATH.HOME)
    },
    onError: (error) => {
      handleAxiosUnprocessableEntityError<LoginResponse, LoginType>(error, form)
    },
  })

  const onSubmit = (values: LoginType) => {
    loginMutation.mutate(values)
  }

  return (
    <div className="bg-orange">
      <div className="container py-4 h-full grid grid-cols-1 lg:grid-cols-3 items-center">
        <Card className="md:col-start-3">
          <CardHeader>
            <CardTitle className="text-2xl">Đăng nhập</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Email</Label>
                      <FormControl>
                        <Input autoComplete="username" placeholder="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Mật khẩu</Label>
                      <FormControl>
                        <Input type="password" autoComplete="new-password" placeholder="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">
                  Đăng nhập
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="justify-center">
            <div>
              Bạn mới biết đến Shopee?{' '}
              <Link className="text-orange" to="/register">
                Đăng ký
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
