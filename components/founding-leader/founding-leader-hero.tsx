import Image from 'next/image'
import { Award, Target, Users } from 'lucide-react'

export default function FoundingLeaderHero() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Founding Leader</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Ashwani Kumar
            </h1>
            
            <p className="text-2xl sm:text-3xl text-secondary font-bold mb-6">
              Visionary. Reformer. Architect of a New Bihar.
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-8">
              The visionary behind Bihar Vikas Party — introducing India's first UPSC-style 
              merit-based candidate selection system for transparent, development-focused governance.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Target className="w-6 h-6 text-secondary mb-2 mx-auto lg:mx-0" />
                <p className="text-sm text-white/80">Merit-Based</p>
                <p className="font-bold">Selection</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Award className="w-6 h-6 text-secondary mb-2 mx-auto lg:mx-0" />
                <p className="text-sm text-white/80">Transparent</p>
                <p className="font-bold">Governance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Users className="w-6 h-6 text-secondary mb-2 mx-auto lg:mx-0" />
                <p className="text-sm text-white/80">People-First</p>
                <p className="font-bold">Leadership</p>
              </div>
            </div>

            <a 
              href="#join" 
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Join the Movement
            </a>
          </div>

          {/* Right Image - Your Photo */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-2xl blur-2xl" />
              
              {/* Photo container */}
              <div className="relative bg-white/10 backdrop-blur-sm border-4 border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Founder_BVP.jpeg" 
                  alt="Ashwani Kumar - Founding Leader of Bihar Vikas Party" 
                  width={600} 
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
                
                {/* Optional overlay for better text visibility if needed */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Ashwani Kumar</p>
                  <p className="text-secondary text-sm">Founding Leader, BVP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
