import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "สินค้าทั่วไป",
      description: "สินค้าคุณภาพพร้อมส่งทันที",
      icon: "🛒",
      productCount: 150
    },
    {
      id: 2,
      name: "สินค้าออเดอร์",
      description: "สั่งทำพิเศษตามความต้องการ",
      icon: "⚡",
      productCount: 45
    },
    {
      id: 3,
      name: "สินค้าแนะนำ",
      description: "สินค้าที่ได้รับความนิยมสูงสุด",
      icon: "🎯",
      productCount: 32
    },
    {
      id: 4,
      name: "อุปกรณ์อิเล็กทรอนิกส์",
      description: "อุปกรณ์ไฮเทคและแกดเจ็ต",
      icon: "📱",
      productCount: 78
    },
    {
      id: 5,
      name: "เครื่องแต่งกาย",
      description: "เสื้อผ้าและแฟชั่น",
      icon: "👕",
      productCount: 92
    },
    {
      id: 6,
      name: "ของใช้ในบ้าน",
      description: "อุปกรณ์และเครื่องใช้ในครัวเรือน",
      icon: "🏠",
      productCount: 67
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
              <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                สินค้า
              </Link>
              <Link href="/categories" className="text-blue-600 dark:text-blue-400 font-semibold">
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
            หมวดหมู่สินค้า
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            เลือกหมวดหมู่สินค้าที่คุณสนใจ
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.productCount} รายการ
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
              <div className="mt-4 text-blue-600 dark:text-blue-400 font-semibold">
                ดูสินค้าในหมวดหมู่นี้ →
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Categories */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            หมวดหมู่แนะนำประจำเดือน
          </h2>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">🎮 เกมมิ่งและอุปกรณ์</h3>
                <p className="text-lg mb-4">
                  คอลเลกชั่นอุปกรณ์เกมมิ่งครบครัน พร้อมส่วนลดพิเศษ
                </p>
                <Link
                  href="/products?category=gaming"
                  className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
                >
                  ดูสินค้าเกมมิ่ง
                </Link>
              </div>
              <div className="hidden md:block">
                <span className="text-6xl">🎮</span>
              </div>
            </div>
          </div>
        </section>
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