import { PATH } from '@/constants/path'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
}

export default function Product({ className }: Props) {
  return (
    <Link to={PATH.HOME} className={cn('bg-white flex flex-col', className)}>
      <img
        src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
        alt="product"
      />
      <div className="p-2">
        <p>Product Name</p>
        <p className="text-orange">100.000 VNĐ</p>
        <div className="flex items-center gap-2"></div>
      </div>
    </Link>
  )
}
