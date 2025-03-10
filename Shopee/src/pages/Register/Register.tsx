import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Link } from 'react-router-dom'
import { RegisterBody, RegisterResponse, RegisterType } from '@/types/register.type'
import { registerAccount } from '@/apis/auth.api'
import { useMutation } from '@tanstack/react-query'
import { isAxiosUnprocessableEntityError } from '@/utils/utils'

export default function Register() {
  const form = useForm<RegisterType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const registerMutation = useMutation({
    mutationFn: registerAccount,
  })

  const onSubmit = (values: RegisterType) => {
    registerMutation.mutate(values, {
      onSuccess: (data) => {
        console.log('data:', data.data.data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<RegisterResponse>(error)) {
          const formError = error.response?.data.data
          formError &&
            Object.entries(formError).forEach(([key, value]) => {
              form.setError(key as keyof RegisterType, { message: value, type: 'Server' })
            })
        }
      },
    })
  }

  return (
    <div className="bg-orange">
      <div className="container py-4 h-full grid grid-cols-1 lg:grid-cols-3 items-center">
        <Card className="md:col-start-3">
          <CardHeader>
            <CardTitle className="text-2xl">Đăng ký</CardTitle>
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
                        <Input placeholder="email" autoComplete="username" {...field} />
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
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Xác nhận mật khẩu</Label>
                      <FormControl>
                        <Input type="password" autoComplete="new-password" placeholder="confirm password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">
                  Đăng ký
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="justify-center">
            <Link to="/login" className="underline text-orange text-sm">
              Đăng nhập
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
