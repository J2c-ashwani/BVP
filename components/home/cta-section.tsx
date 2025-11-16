import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#0C2D72] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Be Part of Bihar's Most Transparent Political Movement
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Join thousands of citizens who believe in merit-based leadership and corruption-free governance
        </p>

        <Link
          href="/join"
          className="inline-flex items-center gap-2 bg-white text-[#0C2D72] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
        >
          Join BVP Today <ArrowRight size={20} />
        </Link>

        <p className="text-orange-100 text-sm mt-8">
          Joining BVP is free. Everyone from Bihar is welcome.
        </p>
      </div>
    </section>
  )
}
