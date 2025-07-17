import BannerCarousel from '@/pages/ProductList/BannerCarousel'
import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList'
import Product from './Product/Product'
import { useState } from 'react'
import { ProductParams, SortBy } from '@/types/productList.type'

export default function ProductList() {
  const [ProductParams, setProductParams] = useState<ProductParams>({
    rating_filter: 0,
    price_min: 0,
    price_max: 0,
    sort_by: SortBy.createdAt,
  })

  const onChangeFilter = (values: ProductParams) => {
    setProductParams((prev) => ({ ...prev, ...values }))
  }

  console.log('ProductParams', ProductParams)

  return (
    <div>
      <BannerCarousel className="container" />
      <div className="bg-gray-200 mt-3 py-6">
        <div className="container flex">
          <AsideFilter productParams={ProductParams} onChangeFilter={onChangeFilter} className="basis-1/4" />
          <div className="basis-3/4">
            <SortProductList productParams={ProductParams} onChangeFilter={onChangeFilter} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <Product key={index} className="col-span-1" />
                ))}
            </div>
            <Product />
          </div>
        </div>
      </div>
    </div>
  )
}
