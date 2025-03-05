import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-[#f1f3f5] py-2 sm:py-3 md:py-4 border-t border-[#e5e7eb] mt-4 sm:mt-6">
      <div className="container mx-auto px-3 sm:px-4 text-center">
        <p className="text-[#6b7280] text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} RACE3D. All rights reserved.
        </p>
        <p className="text-[#6b7280] text-xs sm:text-sm mt-0.5 sm:mt-1">
          Coded By{" "}
          <Link
            href="https://github.com/instax-dutta"
            target="_blank"
            className="text-[#6b7280] hover:text-[#4b5563] hover:underline transition-colors"
          >
            SDAD
          </Link>{" "}
          with 🫶
        </p>
      </div>
    </footer>
  )
}

