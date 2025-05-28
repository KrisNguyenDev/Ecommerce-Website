import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import StarRating from '@/components/ui/star-rating'
import { PATH } from '@/constants/path'
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
}

export default function AsideFilter({ className }: Props) {
  const form = useForm<{
    start: number | string
    end: number | string
  }>({
    defaultValues: {
      start: '',
      end: '',
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (value: any) => {
    console.log(value)
  }

  return (
    <div className={cn('flex flex-col space-y-6', className)}>
      <Link to={PATH.HOME} className="flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        Tất cả danh mục
      </Link>

      <div>
        <Link to={PATH.HOME} className="flex items-center text-orange">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
          Thời trang nam
        </Link>
        <div className="flex flex-col ml-6 space-y-2 mt-2">
          <Link to={PATH.HOME}>Áo khoác</Link>
          <Link to={PATH.HOME}>Áo Vest & Blazer</Link>
          <Link to={PATH.HOME}>Áo Hoodie, Áo Len & Áo Nỉ</Link>
          <Link to={PATH.HOME}>Quần Jeans</Link>
          <Link to={PATH.HOME}>Quần Dài/Quần Âu</Link>
          <Link to={PATH.HOME}>Thêm ▼</Link>
        </div>
      </div>

      <Separator className="bg-gray-300" />

      <div>
        <Link to={PATH.HOME} className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
          Bộ lọc tìm kiếm
        </Link>
        <div className="flex flex-col ml-6 space-y-2 mt-2">
          <Link to={PATH.HOME}>Áo khoác</Link>
          <Link to={PATH.HOME}>Áo Vest & Blazer</Link>
          <Link to={PATH.HOME}>Áo Hoodie, Áo Len & Áo Nỉ</Link>
          <Link to={PATH.HOME}>Quần Jeans</Link>
          <Link to={PATH.HOME}>Quần Dài/Quần Âu</Link>
          <Link to={PATH.HOME}>Thêm ▼</Link>
        </div>
      </div>

      <Separator className="bg-gray-300" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          Khoảng giá
          <div className="flex space-x-2 mt-2">
            <FormField
              control={form.control}
              name="start"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="number" placeholder="₫ TỪ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="end"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="number" placeholder="₫ ĐẾN" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full" type="submit">
            Áp dụng
          </Button>
        </form>
      </Form>

      <Separator className="bg-gray-300" />
      <div>
        Đánh giá
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              onClick={() => {
                console.log(5 - index)
              }}
            >
              <StarRating initialRating={5 - index} />
            </div>
          ))}
      </div>
    </div>
  )
}
