export default function Footer() {
  return (
    <div className="py-12 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 text-sm text-gray-500 gap-10">
          <p className="col-span-3 lg:col-span-1">© 2024 Shopee. Tất cả các quyền được bảo lưu.</p>
          <p className="col-span-3 lg:col-span-2">
            Quốc gia & Khu vực: Singapore | Indonesia | Thái Lan | Malaysia | Việt Nam | Philippines | Brazil | México |
            Colombia | Chile | Đài Loan
          </p>
          <div className="col-span-3 flex justify-around gap-4">
            <p>Chính sách bảo mật</p>
            <p>Quy chế hoạt động</p>
            <p>Chính sách vận chuyển</p>
            <p>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</p>
          </div>
          <div className="col-span-3 text-center text-xs">
            <p>
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
              phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
            </p>
            <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</p>
            <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
            <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
          </div>
        </div>
      </div>
    </div>
  )
}
