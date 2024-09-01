import registerBg from '@/assets/Image/registerBg.png'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Register() {
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
        <Card className="lg:col-start-3">
          <CardHeader>
            <CardTitle className="text-2xl">Đăng ký</CardTitle>
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
            <Button className="w-full">Sign in</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
