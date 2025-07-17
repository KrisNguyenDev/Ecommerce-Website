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
import { Order, ProductParams, SortBy } from '@/types/productList.type'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface Props {
  className?: string
  productParams: ProductParams
  onChangeFilter: (value: ProductParams) => void
}

export default function SortProductList({ className, productParams, onChangeFilter }: Props) {
  const getClassName = (type: SortBy) => {
    return cn(
      'px-4 py-2 hover:bg-orange hover:opacity-20 cursor-pointer',
      productParams?.sort_by == type ? 'bg-orange text-white' : 'bg-white',
    )
  }

  const onChangeSortBy = (value: SortBy) => {
    onChangeFilter({ sort_by: value })
  }

  const onChangeOrderBy = (value: Order) => {
    onChangeFilter({ order: value })
  }

  return (
    <div className={cn('flex justify-between bg-gray-300 px-6 py-3 text-black w-full', className)}>
      <div className="flex basis-3/4 space-x-4 items-center flex-1">
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
      <Pagination className="basis-1/4 justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
