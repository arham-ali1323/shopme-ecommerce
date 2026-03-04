import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
  );
}

interface ProductCardSkeletonProps {
  className?: string;
}

export function ProductCardSkeleton({ className = "" }: ProductCardSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}
    >
      {/* Image skeleton */}
      <div className="aspect-square bg-gray-200" />

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        {/* Brand and rating */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>

        {/* Product name */}
        <Skeleton className="h-5 w-3/4" />

        {/* Price and button */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}

interface ProductGridSkeletonProps {
  count?: number;
}

export function ProductGridSkeleton({ count = 8 }: ProductGridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <ProductCardSkeleton />
        </motion.div>
      ))}
    </div>
  );
}

interface HeroSkeletonProps {
  className?: string;
}

export function HeroSkeleton({ className = "" }: HeroSkeletonProps) {
  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-200 ${className}`}>
      {/* Background pattern skeleton */}
      <div className="absolute inset-0 bg-gray-300" />

      {/* Content skeleton */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Title skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-16 w-96 mx-auto" />
          <Skeleton className="h-8 w-80 mx-auto" />
        </div>

        {/* Buttons skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Skeleton className="h-14 w-48" />
          <Skeleton className="h-14 w-44" />
        </div>

        {/* Featured image skeleton */}
        <div className="relative mx-auto max-w-md mt-12">
          <Skeleton className="aspect-square w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

interface FilterSkeletonProps {
  className?: string;
}

export function FilterSkeleton({ className = "" }: FilterSkeletonProps) {
  return (
    <div className={`space-y-6 p-6 ${className}`}>
      {/* Filter sections */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="space-y-4">
          <Skeleton className="h-6 w-24" />
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

interface ProductDetailSkeletonProps {
  className?: string;
}

export function ProductDetailSkeleton({ className = "" }: ProductDetailSkeletonProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image skeleton */}
        <div className="space-y-4">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="w-20 h-20 rounded-lg flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Content skeleton */}
        <div className="space-y-6">
          {/* Brand and title */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-32" />
          </div>

          {/* Price */}
          <Skeleton className="h-10 w-24" />

          {/* Color selection */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-16" />
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="w-12 h-12 rounded-full" />
              ))}
            </div>
          </div>

          {/* Size selection */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-12" />
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full rounded-lg" />
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <Skeleton className="h-14 w-full" />
        </div>
      </div>
    </div>
  );
}
