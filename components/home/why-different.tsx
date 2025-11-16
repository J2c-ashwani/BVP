import { Zap, Target, Users } from 'lucide-react'

export default function WhyDifferent() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Visual */}
          <div className="relative h-96 bg-gradient-to-tr from-[#0C2D72] to-[#FF7A00] rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center scale-in order-2 lg:order-1">
            <Zap className="w-20 h-20 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white text-center">
              Leadership Must Be Earned
            </h3>
            <p className="text-orange-100 text-center mt-4">
              Not Purchased
            </p>
          </div>

          {/* Right: Content */}
          <div className="slide-up order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 text-balance">
              Why We Are Different
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We believe leadership must be earned — not purchased. BVP introduces <span className="font-bold text-[#0C2D72]">India's first BPSC-style candidate selection exam</span> to eliminate corruption and favoritism in politics.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#0C2D72] text-white">
                    <Target className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A1A1A]">Transparent Selection Process</h4>
                  <p className="text-gray-600">Every candidate goes through rigorous examination based on merit and capability</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#0C2D72] text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A1A1A]">Qualified Leadership</h4>
                  <p className="text-gray-600">Only the most capable and ethical individuals can represent Bihar</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#0C2D72] text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A1A1A]">Fast-Track Development</h4>
                  <p className="text-gray-600">Competent leadership accelerates Bihar's progress on all fronts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
