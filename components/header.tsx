import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-[#f1f3f5] py-3 sm:py-4 px-4 sm:px-6 sticky top-0 z-50 border-b border-[#e5e7eb] shadow-sm">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/" className="flex items-center">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#4b5563]">RACE3D</span>
        </Link>
      </div>
    </header>
  )
}

