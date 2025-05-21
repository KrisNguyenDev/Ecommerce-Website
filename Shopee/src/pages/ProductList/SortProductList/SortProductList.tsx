import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export default function SortProductList({ className }: Props) {
  return <div className={cn('', className)}>SortProductList</div>
}
