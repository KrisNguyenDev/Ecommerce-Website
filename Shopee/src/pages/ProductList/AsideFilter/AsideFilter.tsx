import { PATH } from '@/constants/path'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
}

export default function AsideFilter({ className }: Props) {
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
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
          Thời trang nam
        </div>
        <div className="flex flex-col ml-6 space-y-2 mt-2">
          <p>Áo khoác</p>
          <p>Áo Vest & Blazer</p>
          <p>Áo Hoodie, Áo Len & Áo Nỉ</p>
          <p>Quần Jeans</p>
          <p>Quần Dài/Quần Âu</p>
          <p>Thêm ▼</p>
        </div>
      </div>

      <div>
        <div className="flex items-center">
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
        </div>
        <div className="flex flex-col ml-6 space-y-2 mt-2">
          <p>Áo khoác</p>
          <p>Áo Vest & Blazer</p>
          <p>Áo Hoodie, Áo Len & Áo Nỉ</p>
          <p>Quần Jeans</p>
          <p>Quần Dài/Quần Âu</p>
          <p>Thêm ▼</p>
        </div>
      </div>
    </div>
  )
}
