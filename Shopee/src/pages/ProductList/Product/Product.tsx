import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export default function Product({ className }: Props) {
  return <div className={cn('', className)}>Product</div>
}
