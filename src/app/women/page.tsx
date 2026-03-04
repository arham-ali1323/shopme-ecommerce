"use client";

import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { mockShoes } from '@/data/shoes';

export default function WomenPage() {
  // Get women's shoes - for now we'll show all shoes but could filter by women's categories
  const womenShoes = mockShoes.filter(shoe =>
    ['Running', 'Casual', 'Lifestyle', 'Training', 'Walking', 'Hiking'].includes(shoe.category)
  );

  // Calculate stats for women's section
  const totalProducts = womenShoes.length;
  const averageRating = womenShoes.length > 0
    ? (womenShoes.reduce((sum, shoe) => sum + shoe.rating, 0) / womenShoes.length).toFixed(1)
    : '0';
  const onSaleItems = womenShoes.filter(shoe => shoe.isSale).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white pt-44 pb-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-pink-200" />
              <h1 className="text-4xl md:text-5xl font-bold">Women's Collection</h1>
              <Sparkles className="h-8 w-8 text-pink-200" />
            </div>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Elegant and comfortable footwear designed for the modern woman. From casual chic to athletic performance,
              express your unique style with our curated women's collection.
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
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100 text-center">
              <Sparkles className="h-8 w-8 text-pink-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{totalProducts}</div>
              <div className="text-gray-600">Stylish Options</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 text-center">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{averageRating}★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100 text-center">
              <Heart className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{onSaleItems}</div>
              <div className="text-gray-600">On Sale Now</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Women's Shoes</h2>
            <p className="text-gray-600">Discover our handpicked selection of women's footwear</p>
          </motion.div>

          {womenShoes.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {womenShoes.map((shoe, index) => (
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
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No Women's Shoes Available</h3>
              <p className="text-gray-600 mb-6">
                We're currently updating our women's collection. Check back soon!
              </p>
              <a
                href="/shop"
                className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors duration-200"
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
            {['Running', 'Casual', 'Lifestyle', 'Training', 'Walking', 'Hiking'].map((category) => (
              <a
                key={category}
                href={`/shop?category=${category.toLowerCase()}`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center group"
              >
                <div className="text-sm font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
                  {category}
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Stay in Style</h2>
            <p className="text-pink-100 mb-8 text-lg">
              Get the latest women's fashion trends, exclusive offers, and styling tips delivered to your inbox.
            </p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-600"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
