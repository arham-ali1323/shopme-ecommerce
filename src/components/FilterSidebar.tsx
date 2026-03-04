"use client";

import { motion } from 'framer-motion';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { brands, categories, priceRanges, sizes, colors } from '@/data/shoes';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    brand: string[];
    category: string[];
    priceRange: { min: number; max: number } | null;
    size: number[];
    color: string[];
    sortBy: string;
  };
  onFiltersChange: (filters: FilterState) => void;
}

interface FilterState {
  brand: string[];
  category: string[];
  priceRange: { min: number; max: number } | null;
  size: number[];
  color: string[];
  sortBy: string;
}

export default function FilterSidebar({ isOpen, onClose, filters, onFiltersChange }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    brand: true,
    category: true,
    price: true,
    size: true,
    color: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked
      ? [...filters.brand, brand]
      : filters.brand.filter(b => b !== brand);
    onFiltersChange({ ...filters, brand: newBrands });
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.category, category]
      : filters.category.filter(c => c !== category);
    onFiltersChange({ ...filters, category: newCategories });
  };

  const handlePriceRangeChange = (range: { min: number; max: number }) => {
    onFiltersChange({ ...filters, priceRange: range });
  };

  const handleSizeChange = (size: number, checked: boolean) => {
    const newSizes = checked
      ? [...filters.size, size]
      : filters.size.filter(s => s !== size);
    onFiltersChange({ ...filters, size: newSizes });
  };

  const handleColorChange = (color: string, checked: boolean) => {
    const newColors = checked
      ? [...filters.color, color]
      : filters.color.filter(c => c !== color);
    onFiltersChange({ ...filters, color: newColors });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      brand: [],
      category: [],
      priceRange: null,
      size: [],
      color: [],
      sortBy: 'newest',
    });
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Clear all button */}
        <div className="p-6 border-b border-gray-200">
          <button
            onClick={clearAllFilters}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
          >
            Clear All Filters
          </button>
        </div>

        {/* Filter sections */}
        <div className="p-6 space-y-6">
          {/* Brand */}
          <div>
            <button
              onClick={() => toggleSection('brand')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">Brand</h3>
              {expandedSections.brand ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{ height: expandedSections.brand ? 'auto' : 0, opacity: expandedSections.brand ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes(brand)}
                      onChange={(e) => handleBrandChange(brand, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Category */}
          <div>
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">Category</h3>
              {expandedSections.category ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{ height: expandedSections.category ? 'auto' : 0, opacity: expandedSections.category ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.category.includes(category)}
                      onChange={(e) => handleCategoryChange(category, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Price Range */}
          <div>
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">Price Range</h3>
              {expandedSections.price ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{ height: expandedSections.price ? 'auto' : 0, opacity: expandedSections.price ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      checked={filters.priceRange?.min === range.min && filters.priceRange?.max === range.max}
                      onChange={() => handlePriceRangeChange(range)}
                      className="border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{range.label}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Size */}
          <div>
            <button
              onClick={() => toggleSection('size')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">Size</h3>
              {expandedSections.size ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{ height: expandedSections.size ? 'auto' : 0, opacity: expandedSections.size ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <label key={size} className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={filters.size.includes(size)}
                      onChange={(e) => handleSizeChange(size, e.target.checked)}
                      className="sr-only"
                    />
                    <span className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center text-sm font-medium cursor-pointer transition-colors duration-200 ${
                      filters.size.includes(size)
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-blue-400'
                    }`}>
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Color */}
          <div>
            <button
              onClick={() => toggleSection('color')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">Color</h3>
              {expandedSections.color ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{ height: expandedSections.color ? 'auto' : 0, opacity: expandedSections.color ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <label key={color.name} className="flex flex-col items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.color.includes(color.name)}
                      onChange={(e) => handleColorChange(color.name, e.target.checked)}
                      className="sr-only"
                    />
                    <span
                      className={`w-8 h-8 rounded-full border-2 mb-1 ${
                        filters.color.includes(color.name) ? 'border-gray-900' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs text-gray-600">{color.name}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
    </>
  );
}
