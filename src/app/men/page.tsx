"use client";

import { motion } from 'framer-motion';
import { Users, Zap, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { mockShoes } from '@/data/shoes';

export default function MenPage() {
  // Get men's shoes - for now we'll show all shoes but could filter by men's categories
  const menShoes = mockShoes.filter(shoe =>
    ['Running', 'Basketball', 'Training', 'Casual', 'Lifestyle', 'Hiking'].includes(shoe.category)
  );

  // Calculate stats for men's section
  const totalProducts = menShoes.length;
  const averageRating = menShoes.length > 0
    ? (menShoes.reduce((sum, shoe) => sum + shoe.rating, 0) / menShoes.length).toFixed(1)
    : '0';
  const newArrivals = menShoes.filter(shoe => shoe.isNew).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-44 pb-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8 text-blue-200" />
              <h1 className="text-4xl md:text-5xl font-bold">Men's Collection</h1>
              <Users className="h-8 w-8 text-blue-200" />
            </div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Premium footwear designed for the modern man. From athletic performance to everyday style,
              find your perfect fit in our curated men's collection.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-white -mt-8 relative z-10 rounded-t-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{totalProducts}</div>
              <div className="text-gray-600">Premium Styles</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 text-center">
              <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{averageRating}★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{newArrivals}</div>
              <div className="text-gray-600">New Arrivals</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Men's Shoes</h2>
            <p className="text-gray-600">Discover our handpicked selection of men's footwear</p>
          </motion.div>

          {menShoes.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {menShoes.map((shoe, index) => (
                <motion.div
                  key={shoe.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard shoe={shoe} priority={index < 4} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No Men's Shoes Available</h3>
              <p className="text-gray-600 mb-6">
                We're currently updating our men's collection. Check back soon!
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
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600">Find the perfect shoes for your lifestyle</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {['Running', 'Basketball', 'Training', 'Casual', 'Lifestyle', 'Hiking'].map((category) => (
              <a
                key={category}
                href={`/shop?category=${category.toLowerCase()}`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center group"
              >
                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {category}
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
