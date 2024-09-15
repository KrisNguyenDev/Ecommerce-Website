import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'

export default function Login() {
  return (
    <div className="bg-orange">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-7xl mx-auto p-4 h-full grid grid-cols-1 lg:grid-cols-3 items-center">
          <Card className="lg:col-start-3">
            <CardHeader>
              <CardTitle className="text-2xl">Đăng nhập</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Login</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
