import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export default function AsideFilter({ className }: Props) {
  return <div className={cn('', className)}>AsideFilter</div>
}
