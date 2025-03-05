import Header from "@/components/header"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center p-2 sm:p-3 md:p-4 lg:p-6">
        <div className="container mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 md:mb-4 text-[#4b5563]">
            RACE3D Creation Showcase
          </h1>
          <p className="text-center text-[#6b7280] mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto text-xs sm:text-sm">
            Browse through our collection of high-quality 3D prints. Each piece is carefully crafted with attention to
            detail.
          </p>
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  )
}

