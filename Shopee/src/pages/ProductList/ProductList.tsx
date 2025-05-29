import BannerCarousel from '@/pages/ProductList/BannerCarousel'
import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList'
import Product from './Product/Product'
import { useState } from 'react'
import { ProductQueryParams } from '@/types/productList.type'

export default function ProductList() {
  const [productQueryParams, setProductQueryParams] = useState<ProductQueryParams>()

  const onChangeFilter = (values: ProductQueryParams) => {
    setProductQueryParams((prev) => ({ ...prev, ...values }))
  }

  console.log('productQueryParams', productQueryParams)

  return (
    <div>
      <BannerCarousel className="container" />
      <div className="bg-gray-200 mt-3 py-6">
        <div className="container flex">
          <AsideFilter onChangeFilter={onChangeFilter} className="basis-1/4" />
          <div className="basis-3/4">
            <SortProductList onChangeFilter={onChangeFilter} />
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
