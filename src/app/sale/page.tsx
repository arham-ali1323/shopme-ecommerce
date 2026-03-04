"use client";

import { motion } from 'framer-motion';
import { Tag, Percent, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { mockShoes } from '@/data/shoes';

export default function SalePage() {
  const saleItems = mockShoes.filter(shoe => shoe.isSale);

  // Calculate savings
  const totalSavings = saleItems.reduce((sum, shoe) => {
    const discount = shoe.originalPrice ? shoe.originalPrice - shoe.price : 0;
    return sum + discount;
  }, 0);

  const averageDiscount = saleItems.length > 0
    ? Math.round(saleItems.reduce((sum, shoe) => {
        const discount = shoe.originalPrice
          ? ((shoe.originalPrice - shoe.price) / shoe.originalPrice) * 100
          : 0;
        return sum + discount;
      }, 0) / saleItems.length)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-44">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Tag className="h-8 w-8 text-yellow-300" />
              <h1 className="text-4xl md:text-5xl font-bold">Mega Sale</h1>
              <Percent className="h-8 w-8 text-yellow-300" />
            </div>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Unbeatable deals on premium sneakers. Limited time offers you cannot miss.
              Save big on top brands and styles.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {saleItems.length > 0 ? (
          <>
            {/* Sale Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <Tag className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">{saleItems.length}</div>
                <div className="text-gray-600">Items on Sale</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <Percent className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">Up to {averageDiscount}%</div>
                <div className="text-gray-600">Average Discount</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-bold text-green-600">${totalSavings}</div>
                <div className="text-gray-600">Total Savings</div>
              </div>
            </motion.div>

            {/* Flash Sale Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 mb-8 text-white text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">FLASH SALE</span>
                <Clock className="h-5 w-5" />
              </div>
              <p className="text-red-100">Extra 10% off on all sale items with code FLASH10 at checkout!</p>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {saleItems.map((shoe, index) => (
                <motion.div
                  key={shoe.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Sale Badge */}
                  <div className="absolute -top-2 -right-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    SALE
                  </div>
                  <ProductCard shoe={shoe} />
                </motion.div>
              ))}
            </motion.div>

            {/* Sale Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl font-bold text-red-600 mb-2">50%</div>
                <div className="text-gray-600">Off Running Shoes</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
                <div className="text-gray-600">Off Lifestyle</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl font-bold text-yellow-600 mb-2">30%</div>
                <div className="text-gray-600">Off Basketball</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
                <div className="text-gray-600">Off All Boots</div>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Tag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Sale Items Currently</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We are always adding great deals. Check back soon or browse our regular collection!
            </p>
            <a
              href="/shop"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Browse All Shoes
            </a>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
