import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                ร้านค้าออนไลน์
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                หน้าแรก
              </Link>
              <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              ยินดีต้อนรับสู่ร้านค้าออนไลน์
            </h2>
            <p className="text-xl mb-8">
              ค้นหาสินค้าคุณภาพดี ราคาถูก พร้อมบริการจัดส่งทั่วไทย
            </p>
            <Link href="/products" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
              ดูสินค้าทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            หมวดหมู่สินค้าแนะนำ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">สินค้าทั่วไป</h4>
              <p className="text-gray-600 dark:text-gray-400">สินค้าคุณภาพพร้อมส่งทันที</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">สินค้าออเดอร์</h4>
              <p className="text-gray-600 dark:text-gray-400">สั่งทำพิเศษตามความต้องการ</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">สินค้าแนะนำ</h4>
              <p className="text-gray-600 dark:text-gray-400">สินค้าที่ได้รับความนิยมสูงสุด</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale */}
      <section className="bg-red-50 dark:bg-red-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            ⚡ Flash Sale - ส่วนลดพิเศษ!
          </h3>
          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              โปรโมชั่นพิเศษลดราคาสูงสุด 50% จนกว่าของจะหมด!
            </p>
            <Link href="/flash-sale" className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700">
              ดู Flash Sale
            </Link>
          </div>
        </div>
      </section>

      {/* Top-up Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            เติมเงินเข้าสู่ระบบ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">TrueWallet</h4>
              <p className="text-gray-600 dark:text-gray-400">เติมเงินอัตโนมัติด้วยซองอั่งเปา</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">PromptPay</h4>
              <p className="text-gray-600 dark:text-gray-400">สแกน QR Code ง่ายๆ</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎫</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">โค้ดเติมเงิน</h4>
              <p className="text-gray-600 dark:text-gray-400">ใช้โค้ดส่วนลดและเติมเงิน</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
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
