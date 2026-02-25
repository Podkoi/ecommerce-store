import Link from "next/link";

export default function Products() {
  // Mock data - ในอนาคตจะดึงจาก database
  const products = [
    {
      id: 1,
      name: "สินค้าตัวอย่าง 1",
      price: 299,
      image: "/placeholder.jpg",
      category: "ทั่วไป",
      stock: 50
    },
    {
      id: 2,
      name: "สินค้าตัวอย่าง 2",
      price: 599,
      image: "/placeholder.jpg",
      category: "ออเดอร์",
      stock: 0
    },
    {
      id: 3,
      name: "สินค้าตัวอย่าง 3",
      price: 199,
      image: "/placeholder.jpg",
      category: "แนะนำ",
      stock: 25
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                ร้านค้าออนไลน์
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                หน้าแรก
              </Link>
              <Link href="/products" className="text-blue-600 dark:text-blue-400 font-semibold">
                สินค้า
              </Link>
              <Link href="/categories" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                หมวดหมู่
              </Link>
              <Link href="/topup" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                เติมเงิน
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                เข้าสู่ระบบ
              </Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                สมัครสมาชิก
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            สินค้าทั้งหมด
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            ค้นหาสินค้าคุณภาพดีพร้อมบริการจัดส่งทั่วไทย
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <option>หมวดหมู่ทั้งหมด</option>
            <option>สินค้าทั่วไป</option>
            <option>สินค้าออเดอร์</option>
            <option>สินค้าแนะนำ</option>
          </select>
          <input
            type="text"
            placeholder="ค้นหาสินค้า..."
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            ค้นหา
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">รูปภาพสินค้า</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  หมวดหมู่: {product.category}
                </p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    ฿{product.price}
                  </span>
                  <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `คงเหลือ ${product.stock}` : 'สินค้าหมด'}
                  </span>
                </div>
                <button
                  className={`w-full py-2 px-4 rounded-md font-semibold ${
                    product.stock > 0
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'เพิ่มลงตะกร้า' : 'สินค้าหมด'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">
            โหลดสินค้าเพิ่มเติม
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">เกี่ยวกับเรา</h4>
              <p className="text-gray-400">
                ร้านค้าออนไลน์ที่ให้บริการสินค้าคุณภาพ พร้อมระบบเติมเงินที่ปลอดภัย
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">บริการลูกค้า</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">ช่วยเหลือ</Link></li>
                <li><Link href="/contact" className="hover:text-white">ติดต่อเรา</Link></li>
                <li><Link href="/returns" className="hover:text-white">นโยบายคืนสินค้า</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">บัญชีของฉัน</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/profile" className="hover:text-white">โปรไฟล์</Link></li>
                <li><Link href="/orders" className="hover:text-white">ประวัติการสั่งซื้อ</Link></li>
                <li><Link href="/balance" className="hover:text-white">ยอดเงินคงเหลือ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">ติดตามเรา</h4>
              <div className="flex space-x-4">
                <span className="text-2xl">📘</span>
                <span className="text-2xl">🐦</span>
                <span className="text-2xl">📷</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ร้านค้าออนไลน์. สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}