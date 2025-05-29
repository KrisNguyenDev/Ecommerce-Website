export interface ProductQueryParams {
  page?: number // Số trang, mặc định là 1
  limit?: number // Số sản phẩm trên 1 trang, mặc định là 30
  order?: Order // Sắp xếp theo thứ tự, mặc định là 'desc'
  sort_by?: SortBy // Sắp xếp theo trường, mặc định là 'createdAt'
  category?: string // categoryId - Lọc sản phẩm theo category
  exclude?: string // productId - Loại trừ sản phẩm nào đó
  rating_filter?: number // Lọc sản phẩm có số sao >= rating_filter
  price_max?: number // Giá cao nhất
  price_min?: number // Giá thấp nhất
  name?: string // Tên sản phẩm (gõ đầy đủ dấu nếu là tiếng Việt)
}

export enum SortBy {
  createdAt = 'createdAt',
  view = 'view',
  sold = 'sold',
  price = 'price',
}

export enum Order {
  asc = 'asc',
  desc = 'desc',
}
