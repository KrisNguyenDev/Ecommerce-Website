import BannerCarousel from '@/pages/ProductList/BannerCarousel'
import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList'
import Product from './Product/Product'

export default function ProductList() {
  return (
    <div>
      <BannerCarousel className="container" />
      <div className="bg-gray-200 mt-3 py-6">
        <div className="container flex">
          <AsideFilter className="basis-1/4" />
          <div className="basis-3/4">
            <SortProductList />
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
