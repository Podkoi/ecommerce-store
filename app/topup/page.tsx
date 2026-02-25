'use client';

import { useState } from "react";
import Link from "next/link";

export default function TopUp() {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const topUpMethods = [
    {
      id: 'truewallet',
      name: 'TrueWallet',
      description: 'เติมเงินด้วยซองอั่งเปา TrueWallet',
      icon: '💰',
      color: 'bg-yellow-500'
    },
    {
      id: 'promptpay',
      name: 'PromptPay',
      description: 'สแกน QR Code ด้วย PromptPay',
      icon: '📱',
      color: 'bg-blue-500'
    },
    {
      id: 'code',
      name: 'โค้ดเติมเงิน',
      description: 'ใช้โค้ดส่วนลดและเติมเงิน',
      icon: '🎫',
      color: 'bg-green-500'
    }
  ];

  const handleTopUp = () => {
    if (!selectedMethod || !amount) {
      alert('กรุณาเลือกวิธีการเติมเงินและจำนวนเงิน');
      return;
    }
    alert(`เติมเงิน ${amount} บาท ด้วย ${selectedMethod}`);
  };

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
              <Link href="/categories" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                หมวดหมู่
              </Link>
              <Link href="/topup" className="text-blue-600 dark:text-blue-400 font-semibold">
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            เติมเงินเข้าสู่ระบบ
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            เลือกวิธีการเติมเงินที่สะดวกที่สุดสำหรับคุณ
          </p>
        </div>

        {/* Top-up Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {topUpMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`cursor-pointer rounded-lg p-6 border-2 transition-all ${
                selectedMethod === method.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <span className="text-2xl text-white">{method.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                {method.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Top-up Form */}
        {selectedMethod && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              เติมเงินด้วย {topUpMethods.find(m => m.id === selectedMethod)?.name}
            </h2>

            <div className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  เลือกจำนวนเงิน
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['100', '200', '500', '1000'].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setAmount(amt)}
                      className={`py-3 px-4 rounded-md border text-center font-semibold transition-all ${
                        amount === amt
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                    >
                      ฿{amt}
                    </button>
                  ))}
                </div>
                <div className="mt-3">
                  <input
                    type="number"
                    placeholder="หรือใส่จำนวนเงินเอง"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Method-specific content */}
              {selectedMethod === 'truewallet' && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-4">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    วิธีการเติมเงิน TrueWallet
                  </h4>
                  <ol className="list-decimal list-inside text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>เปิดแอป TrueWallet</li>
                    <li>สร้างซองอั่งเปา</li>
                    <li>คัดลอกลิงก์ซองอั่งเปา</li>
                    <li>วางลิงก์ในช่องด้านล่าง</li>
                  </ol>
                  <input
                    type="url"
                    placeholder="วางลิงก์ซองอั่งเปา TrueWallet ที่นี่"
                    className="w-full mt-3 px-3 py-2 border border-yellow-300 dark:border-yellow-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              )}

              {selectedMethod === 'promptpay' && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    วิธีการเติมเงิน PromptPay
                  </h4>
                  <div className="text-center">
                    <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400">QR Code</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      สแกน QR Code ด้านบนด้วยแอปธนาคารที่รองรับ PromptPay
                    </p>
                  </div>
                </div>
              )}

              {selectedMethod === 'code' && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    ใช้โค้ดเติมเงิน
                  </h4>
                  <input
                    type="text"
                    placeholder="ใส่โค้ดเติมเงิน"
                    className="w-full px-3 py-2 border border-green-300 dark:border-green-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                    รับโค้ดเติมเงินได้จากโปรโมชั่นหรือซื้อจากร้านค้า
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleTopUp}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={!amount}
              >
                เติมเงิน {amount ? `฿${amount}` : ''}
              </button>
            </div>
          </div>
        )}

        {/* Top-up History */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            ประวัติการเติมเงิน
          </h3>
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <span className="text-4xl mb-2 block">📋</span>
            <p>ยังไม่มีประวัติการเติมเงิน</p>
            <p className="text-sm">เริ่มเติมเงินเพื่อดูประวัติที่นี่</p>
          </div>
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