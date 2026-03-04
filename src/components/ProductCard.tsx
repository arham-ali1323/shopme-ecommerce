"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Shoe } from '@/data/shoes';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  shoe: Shoe;
  priority?: boolean;
}

export default function ProductCard({ shoe, priority = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { dispatch } = useCart();

  const discount = shoe.originalPrice
    ? Math.round(((shoe.originalPrice - shoe.price) / shoe.originalPrice) * 100)
    : 0;

  // Card container animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      rotateX: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  // Image container animation variants
  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.4
      }
    }
  };

  // Badge animation variants
  const badgeVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.6
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <Link href={`/product/${shoe.id}`}>
        <motion.div
          className="relative aspect-square overflow-hidden bg-gray-100"
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
        >
          {/* Background gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />

          {/* Badges */}
          <motion.div
            className="absolute top-3 left-3 z-20 flex flex-col gap-2"
            variants={badgeVariants}
            initial="initial"
            whileHover="hover"
          >
            {shoe.isNew && (
              <motion.span
                className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                New
              </motion.span>
            )}
            {shoe.isSale && discount > 0 && (
              <motion.span
                className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#dc2626"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                -{discount}%
              </motion.span>
            )}
          </motion.div>

          {/* Wishlist button */}
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
            className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-xl hover:bg-white transition-all duration-300 border border-white/20"
            onClick={(e) => {
              e.preventDefault();
              // Handle wishlist toggle
            }}
          >
            <motion.div
              animate={isHovered ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors duration-200" />
            </motion.div>
          </motion.button>

          {/* Main image */}
          <motion.div
            className="w-full h-full relative"
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotateY: isHovered ? 5 : 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              rotateY: { duration: 0.3 }
            }}
          >
            <Image
              src={shoe.images[currentImageIndex]}
              alt={shoe.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
            />

            {/* Image overlay effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Quick view button */}
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
            transition={{ delay: 0.1 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 border border-white/20"
            onClick={(e) => {
              e.preventDefault();
              // Handle quick view
            }}
          >
            <motion.div
              animate={isHovered ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Eye className="h-4 w-4" />
            </motion.div>
            <span>Quick View</span>
          </motion.button>

          {/* Image thumbnails */}
          {shoe.images.length > 1 && (
            <motion.div
              className="absolute bottom-4 right-4 flex gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {shoe.images.slice(0, 3).map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "#ffffff"
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    backgroundColor: index === currentImageIndex ? "#ffffff" : "rgba(255,255,255,0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="w-3 h-3 rounded-full shadow-lg border border-white/30"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </Link>

      {/* Product info */}
      <motion.div
        className="p-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <motion.div
          className="flex items-center justify-between mb-2"
          whileHover={{ scale: 1.01 }}
        >
          <motion.span
            className="text-sm text-gray-500 font-medium"
            whileHover={{ color: "#3b82f6" }}
          >
            {shoe.brand}
          </motion.span>
          <motion.div
            className="flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-sm text-gray-600"
              animate={isHovered ? { rotate: [0, 10, -10, 0] } : { rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              ★
            </motion.span>
            <span className="text-sm text-gray-600">{shoe.rating}</span>
            <span className="text-sm text-gray-400">({shoe.reviews})</span>
          </motion.div>
        </motion.div>

        <Link href={`/product/${shoe.id}`}>
          <motion.h3
            className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200"
            whileHover={{ scale: 1.01 }}
          >
            {shoe.name}
          </motion.h3>
        </Link>

        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              className="text-lg font-bold text-gray-900"
              whileHover={{ color: "#1f2937" }}
            >
              ${shoe.price}
            </motion.span>
            {shoe.originalPrice && (
              <motion.span
                className="text-sm text-gray-500 line-through"
                whileHover={{ scale: 0.95 }}
              >
                ${shoe.originalPrice}
              </motion.span>
            )}
          </motion.div>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart with default size and color
              dispatch({
                type: 'ADD_ITEM',
                payload: {
                  shoe,
                  size: shoe.sizes[0], // Default to first available size
                  color: shoe.colors[0]?.name || 'Default', // Default to first color
                  quantity: 1,
                }
              });
            }}
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ShoppingCart className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
