import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Order, ProductQueryParams, SortBy } from '@/types/productList.type'
import { useState } from 'react'

interface Props {
  className?: string
  onChangeFilter: (value: ProductQueryParams) => void
}

export default function SortProductList({ className, onChangeFilter }: Props) {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.createdAt)

  const getClassName = (type: SortBy) => {
    return cn(
      'px-4 py-2 hover:bg-orange hover:opacity-20 cursor-pointer',
      sortBy == type ? 'bg-orange text-white' : 'bg-white',
    )
  }

  const onChangeSortBy = (value: SortBy) => {
    setSortBy(value)
    onChangeFilter({ sort_by: value })
  }

  const onChangeOrderBy = (value: Order) => {
    onChangeFilter({ order: value })
  }

  return (
    <div className={cn('flex bg-gray-300 px-6 py-3 text-black', className)}>
      <div className="flex space-x-4 items-center">
        <div>Sắp xếp theo</div>
        <div className={getClassName(SortBy.createdAt)} onClick={() => onChangeSortBy(SortBy.createdAt)}>
          Mới nhất
        </div>
        <div className={getClassName(SortBy.view)} onClick={() => onChangeSortBy(SortBy.view)}>
          Phổ biến
        </div>
        <div className={getClassName(SortBy.sold)} onClick={() => onChangeSortBy(SortBy.sold)}>
          Bán chạy
        </div>
        <Select
          onValueChange={(value: Order) => {
            onChangeSortBy(SortBy.price)
            onChangeOrderBy(value)
          }}
        >
          <SelectTrigger className="w-[200px] rounded-none">
            <SelectValue placeholder="Giá" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sắp xếp theo</SelectLabel>
              <SelectItem value={Order.asc}>Giá: Giá thấp đến cao</SelectItem>
              <SelectItem value={Order.desc}>Giá: Giá cao đến thấp</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
