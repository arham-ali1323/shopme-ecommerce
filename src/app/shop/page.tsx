"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, List, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import { mockShoes } from '@/data/shoes';
import { ProductGridSkeleton } from '@/components/Skeletons';
import type { Shoe } from '@/data/shoes';

export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    brand: [] as string[],
    category: [] as string[],
    priceRange: null as { min: number; max: number } | null,
    size: [] as number[],
    color: [] as string[],
    sortBy: 'newest',
  });

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = mockShoes.filter((shoe) => {
      // Brand filter
      if (filters.brand.length > 0 && !filters.brand.includes(shoe.brand)) {
        return false;
      }

      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(shoe.category)) {
        return false;
      }

      // Price range filter
      if (filters.priceRange) {
        if (shoe.price < filters.priceRange.min || shoe.price > filters.priceRange.max) {
          return false;
        }
      }

      // Size filter (check if any selected sizes are available)
      if (filters.size.length > 0) {
        const hasMatchingSize = filters.size.some(size => shoe.sizes.includes(size));
        if (!hasMatchingSize) return false;
      }

      // Color filter (check if any selected colors are available)
      if (filters.color.length > 0) {
        const hasMatchingColor = filters.color.some(color =>
          shoe.colors.some(shoeColor => shoeColor.name.toLowerCase() === color.toLowerCase())
        );
        if (!hasMatchingColor) return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        // Assuming products are already in newest order
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  const handleFiltersChange = (newFilters: typeof filters) => {
    setIsLoading(true);
    setFilters(newFilters);
    setSortBy(newFilters.sortBy);

    // Simulate loading delay for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const clearFilters = () => {
    setFilters({
      brand: [],
      category: [],
      priceRange: null,
      size: [],
      color: [],
      sortBy: 'newest',
    });
    setSortBy('newest');
  };

  const activeFiltersCount =
    filters.brand.length +
    filters.category.length +
    (filters.priceRange ? 1 : 0) +
    filters.size.length +
    filters.color.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-44">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop All Shoes</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your perfect pair from our curated collection of premium footwear
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              isOpen={true}
              onClose={() => {}}
              filters={filters}
              onFiltersChange={handleFiltersChange}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                {/* Results Count */}
                <span className="text-gray-600 text-sm sm:text-base">
                  {filteredAndSortedProducts.length} products
                </span>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'} transition-colors duration-200`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'} transition-colors duration-200`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 p-3 sm:p-4 bg-white rounded-lg border border-gray-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <span className="font-medium text-gray-900 text-sm sm:text-base">Active Filters</span>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium self-start sm:self-auto"
                  >
                    Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.brand.map(brand => (
                    <span key={brand} className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-800">
                      {brand}
                      <button
                        onClick={() => setFilters(prev => ({ ...prev, brand: prev.brand.filter(b => b !== brand) }))}
                        className="ml-1 sm:ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  {filters.category.map(category => (
                    <span key={category} className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-green-100 text-green-800">
                      {category}
                      <button
                        onClick={() => setFilters(prev => ({ ...prev, category: prev.category.filter(c => c !== category) }))}
                        className="ml-1 sm:ml-2 text-green-600 hover:text-green-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  {filters.priceRange && (
                    <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-yellow-100 text-yellow-800">
                      ${filters.priceRange.min} - ${filters.priceRange.max}
                      <button
                        onClick={() => setFilters(prev => ({ ...prev, priceRange: null }))}
                        className="ml-1 sm:ml-2 text-yellow-600 hover:text-yellow-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {filters.size.map(size => (
                    <span key={size} className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-purple-100 text-purple-800">
                      Size {size}
                      <button
                        onClick={() => setFilters(prev => ({ ...prev, size: prev.size.filter(s => s !== size) }))}
                        className="ml-1 sm:ml-2 text-purple-600 hover:text-purple-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  {filters.color.map(color => (
                    <span key={color} className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-pink-100 text-pink-800">
                      {color}
                      <button
                        onClick={() => setFilters(prev => ({ ...prev, color: prev.color.filter(c => c !== color) }))}
                        className="ml-1 sm:ml-2 text-pink-600 hover:text-pink-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Products Grid */}
            {isLoading ? (
              <ProductGridSkeleton count={12} />
            ) : filteredAndSortedProducts.length > 0 ? (
              <motion.div
                layout
                className={
                  viewMode === 'grid'
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-6"
                }
              >
                {filteredAndSortedProducts.map((shoe: Shoe, index: number) => (
                  <motion.div
                    key={shoe.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ProductCard shoe={shoe} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 mb-4">
                  <SlidersHorizontal className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters to see more products.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      {/* Removed to prevent duplicate filter rendering - using desktop sidebar only */}
      {/* <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFiltersChange={handleFiltersChange}
      /> */}

      <Footer />
    </div>
  );
}
