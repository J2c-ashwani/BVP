import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0C2D72] via-[#1a4fa3] to-[#0C2D72] overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl bg-white"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl bg-[#FF7A00]"></div>
      </div>

      {/* Bihar map silhouette effect using CSS */}
      <div className="absolute inset-0 opacity-5">
        <MapPin className="absolute top-1/4 left-1/3 w-96 h-96 text-white" strokeWidth={0.5} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center animate-fade-in">
          <Image 
            src="/logo.png" 
            alt="Bihar Vikas Party Logo" 
            width={120} 
            height={120}
            className="h-32 w-auto drop-shadow-lg"
          />
        </div>

        {/* Main Headline */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight text-balance">
            Bihar Vikas Party
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-100 mb-6 text-balance">
            A New Beginning for Bihar's Future
          </h2>
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-orange-50 max-w-2xl mx-auto mb-12 fade-in">
          A proposed political party committed to transparency, development, and merit-based leadership. We believe leadership must be earned—not purchased.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in">
          <Link
            href="/join"
            className="bg-white text-[#0C2D72] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl scale-in"
          >
            Join the Movement
          </Link>
          <Link
            href="/vision"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-[#FF7A00] hover:text-white hover:border-[#FF7A00] transition-colors scale-in"
          >
            Read Our Vision
          </Link>
        </div>

        {/* Trust badge */}
        <div className="flex items-center justify-center gap-2 text-orange-100 text-sm fade-in">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>100% Transparent • Merit-Based • Corruption-Free</span>
        </div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  )
}
