export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 text-balance">
              About Bihar Vikas Party
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Bihar Vikas Party (BVP) is a proposed political party focused on transparent governance, corruption-free politics, and youth-driven development. Our model includes a BPSC-style exam and interview for candidate selection to ensure capable, deserving leaders represent Bihar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We envision a Bihar where development is fast, transparent, and reaches every citizen. By eliminating favoritism and corruption through merit-based selection, we create a pathway for the most qualified individuals to lead.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0C2D72] rounded-full"></div>
                <span className="text-gray-700 font-medium">Transparent Governance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0C2D72] rounded-full"></div>
                <span className="text-gray-700 font-medium">Merit-Based Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0C2D72] rounded-full"></div>
                <span className="text-gray-700 font-medium">Youth Empowerment</span>
              </div>
            </div>
          </div>

          {/* Decorative Box */}
          <div className="relative h-96 bg-gradient-to-br from-[#0C2D72] to-[#1a4fa3] rounded-2xl shadow-2xl p-8 flex items-center justify-center scale-in">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-4">BVP</div>
              <p className="text-orange-100 text-lg">Bihar Vikas Party</p>
              <p className="text-orange-50 text-sm mt-4">Building Tomorrow, Today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
