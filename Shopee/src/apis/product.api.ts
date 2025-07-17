import { ProductParams, ProductsResponse } from '@/types/productList.type'
import http from '@/utils/http'

export const getProducts = (params: ProductParams) => {
  return http.get<ProductsResponse>('/products', { params })
}
