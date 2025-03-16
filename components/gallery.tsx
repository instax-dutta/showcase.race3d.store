"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn, ShoppingCart, ChevronUp, ChevronDown, X } from "lucide-react"
import { galleryItems } from "@/lib/image-data"

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoSlideInterval, setAutoSlideInterval] = useState<NodeJS.Timeout | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showZoom, setShowZoom] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(true)
  const thumbnailsRef = useRef<HTMLDivElement>(null)
  const mainImageRef = useRef<HTMLDivElement>(null)

  // Function to update the current image index
  const updateImage = useCallback((newIndex: number) => {
    setIsLoading(true)
    setCurrentIndex(newIndex)
  }, [])

  // Handle next button click
  const handleNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % galleryItems.length
    updateImage(newIndex)
    resetAutoSlide()
  }, [currentIndex, updateImage])

  // Handle previous button click
  const handlePrevious = useCallback(() => {
    const newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    updateImage(newIndex)
    resetAutoSlide()
  }, [currentIndex, updateImage])

  // Reset auto slide timer
  const resetAutoSlide = useCallback(() => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval)
    }

    const newInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
      setIsLoading(true)
    }, 8000)

    setAutoSlideInterval(newInterval)
  }, [autoSlideInterval])

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    if (index !== currentIndex) {
      updateImage(index)
      resetAutoSlide()
    }
  }

  // Handle swipe on mobile
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const diff = touchStartX.current - touchEndX.current
    const threshold = 50 // minimum distance to be considered a swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left, show next image
        handleNext()
      } else {
        // Swipe right, show previous image
        handlePrevious()
      }
    }

    // Reset touch positions
    touchStartX.current = null
    touchEndX.current = null
  }

  // Scroll to current thumbnail
  useEffect(() => {
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current
      const thumbnails = container.querySelectorAll("button")
      const currentThumb = thumbnails[currentIndex]

      if (currentThumb) {
        const scrollLeft = currentThumb.offsetLeft - container.clientWidth / 2 + currentThumb.clientWidth / 2
        container.scrollTo({ left: scrollLeft, behavior: "smooth" })
      }
    }
  }, [currentIndex])

  // Initialize auto slide on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
      setIsLoading(true)
    }, 5000)

    setAutoSlideInterval(interval)

    // Clean up interval on component unmount
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "Escape" && showZoom) setShowZoom(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleNext, handlePrevious, showZoom])

  // Adjust main image container height on window resize
  useEffect(() => {
    const updateHeight = () => {
      if (mainImageRef.current) {
        // For mobile views, ensure the aspect ratio is maintained
        if (window.innerWidth < 768) {
          // No need to set a fixed height, the aspect ratio class handles it
        } else {
          // For larger screens, set a fixed height
          mainImageRef.current.style.height = "400px"
        }
      }
    }

    // Run once on mount
    updateHeight()

    // Add event listener
    window.addEventListener("resize", updateHeight)

    // Clean up
    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  // Get current gallery item
  const currentItem = galleryItems[currentIndex]

  return (
    <div className="gallery-container w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        {/* Main Image */}
        <div
          ref={mainImageRef}
          className="relative bg-[#f8f9fa] rounded-lg overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1 w-full shadow-sm border border-[#e5e7eb]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {isLoading && (
              <div className="animate-pulse flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 border-3 border-[#b8c4d0] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          <Image
            src={currentItem.url || "/placeholder.svg"}
            alt={currentItem.title}
            fill
            className={`object-contain transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
            onLoad={() => setIsLoading(false)}
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />

          {/* Image Title - More Prominent */}
          

          {/* Image Controls */}
          <div className="absolute inset-x-0 top-0 p-1 sm:p-2 flex justify-between items-center">
            <div className="bg-[#f8f9fa]/80 backdrop-blur-sm text-[#6b7280] px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] sm:text-xs shadow-sm border border-[#e5e7eb]">
              {currentIndex + 1} / {galleryItems.length}
            </div>

            <div className="flex gap-1">
              <button
                onClick={() => setShowThumbnails(!showThumbnails)}
                className="bg-[#f8f9fa]/80 backdrop-blur-sm hover:bg-[#f1f3f5] text-[#6b7280] p-0.5 sm:p-1 rounded-md transition-all shadow-sm border border-[#e5e7eb]"
                aria-label={showThumbnails ? "Hide thumbnails" : "Show thumbnails"}
              >
                {showThumbnails ? (
                  <ChevronDown size={14} className="sm:hidden" />
                ) : (
                  <ChevronUp size={14} className="sm:hidden" />
                )}
                {showThumbnails ? (
                  <ChevronDown size={16} className="hidden sm:block" />
                ) : (
                  <ChevronUp size={16} className="hidden sm:block" />
                )}
              </button>

              <button
                onClick={() => setShowZoom(true)}
                className="bg-[#f8f9fa]/80 backdrop-blur-sm hover:bg-[#f1f3f5] text-[#6b7280] p-0.5 sm:p-1 rounded-md transition-all shadow-sm border border-[#e5e7eb]"
                aria-label="Zoom image"
              >
                <ZoomIn size={14} className="sm:hidden" />
                <ZoomIn size={16} className="hidden sm:block" />
              </button>
            </div>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-[#f8f9fa]/80 backdrop-blur-sm hover:bg-[#f1f3f5] text-[#6b7280] p-1 sm:p-1.5 rounded-md transition-all shadow-sm border border-[#e5e7eb]"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} className="sm:hidden" />
            <ChevronLeft size={18} className="hidden sm:block" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-[#f8f9fa]/80 backdrop-blur-sm hover:bg-[#f1f3f5] text-[#6b7280] p-1 sm:p-1.5 rounded-md transition-all shadow-sm border border-[#e5e7eb]"
            aria-label="Next image"
          >
            <ChevronRight size={16} className="sm:hidden" />
            <ChevronRight size={18} className="hidden sm:block" />
          </button>

          {/* Order Now Button */}
          <div className="absolute inset-x-0 bottom-0 p-1.5 sm:p-2 flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSekMWP9FT5QGOYRM4008SfCqLI0jaOLE5AZN6_uqIgujmyYeA/viewform"
              target="_blank"
              className="inline-flex items-center justify-center gap-1 sm:gap-1.5 bg-[#b8c4d0] hover:bg-[#a5b4c2] text-[#4b5563] px-3 sm:px-4 py-1 sm:py-1.5 rounded-md font-medium text-xs sm:text-sm transition-all duration-300 shadow-sm w-full max-w-[160px] sm:max-w-[200px]"
              rel="noreferrer"
            >
              <ShoppingCart size={12} className="sm:hidden" />
              <ShoppingCart size={14} className="hidden sm:block" />
              Order Now
            </a>
          </div>
        </div>

        {/* Vertical Thumbnails for Desktop */}
        <div className="hidden md:flex flex-col gap-2 h-[400px] overflow-y-auto py-1 scrollbar-thin">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleThumbnailClick(index)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md transition-all group ${
                index === currentIndex
                  ? "ring-2 ring-[#b8c4d0] scale-105 z-10 shadow-sm"
                  : "opacity-70 hover:opacity-100 border border-[#e5e7eb]"
              }`}
            >
              <Image
                src={item.url || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover"
                unoptimized
                sizes="64px"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-1">
                <span className="text-white text-[8px] truncate w-full text-center">{item.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Thumbnails for Mobile */}
      {showThumbnails && (
        <div ref={thumbnailsRef} className="md:hidden mt-2 flex gap-1.5 overflow-x-auto py-1.5 px-1 scrollbar-thin">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleThumbnailClick(index)}
              className={`relative h-12 sm:h-14 w-12 sm:w-14 flex-shrink-0 overflow-hidden rounded-md transition-all group ${
                index === currentIndex
                  ? "ring-2 ring-[#b8c4d0] scale-105 z-10 shadow-sm"
                  : "opacity-70 hover:opacity-100 border border-[#e5e7eb]"
              }`}
            >
              <Image
                src={item.url || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover"
                unoptimized
                sizes="(max-width: 640px) 48px, 56px"
              />
              
            </button>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      {showZoom && (
        <div
          className="fixed inset-0 bg-[#4b5563]/80 z-50 flex items-center justify-center p-2"
          onClick={() => setShowZoom(false)}
        >
          <button
            className="absolute top-2 right-2 bg-[#f8f9fa] hover:bg-[#f1f3f5] text-[#6b7280] p-1 sm:p-1.5 rounded-md transition-all shadow-md"
            aria-label="Close zoom view"
          >
            <X size={16} className="sm:hidden" />
            <X size={18} className="hidden sm:block" />
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh] sm:h-[85vh] bg-[#f8f9fa] p-2 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 inset-x-0 bg-[#f1f3f5] p-2 sm:p-3 text-center border-b border-[#e5e7eb]">
              <h3 className="text-[#4b5563] font-semibold text-sm sm:text-base md:text-lg">{currentItem.title}</h3>
            </div>
            <Image
              src={currentItem.url || "/placeholder.svg"}
              alt={currentItem.title}
              fill
              className="object-contain p-2 pt-8 sm:pt-10"
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />
          </div>
        </div>
      )}
    </div>
  )
}
