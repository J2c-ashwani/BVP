import { Sparkles, TrendingUp, Users } from 'lucide-react'

export default function YouthHero() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary/20 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-5 h-5 text-secondary" />
          <span className="font-bold text-secondary text-lg">Message to the Youth of Bihar</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          You Are the Future
          <span className="block text-secondary mt-2">You Are the Revolution</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
          From the Desk of the Founding Leader — <span className="font-bold">Ashwani Kumar</span>
        </p>

        {/* Opening Message */}
        <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-8 sm:p-10 mb-10">
          <p className="text-2xl sm:text-3xl font-bold mb-4 leading-relaxed">
            Dear Youth of Bihar,
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            You are the <span className="text-secondary font-bold">strength</span>, the{' '}
            <span className="text-secondary font-bold">energy</span>, and the{' '}
            <span className="text-secondary font-bold">future</span> of our state.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Users className="w-10 h-10 text-secondary mb-3 mx-auto" />
            <p className="text-3xl font-bold mb-1">60%</p>
            <p className="text-white/80 text-sm">Population Under 35</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <TrendingUp className="w-10 h-10 text-secondary mb-3 mx-auto" />
            <p className="text-3xl font-bold mb-1">Your Era</p>
            <p className="text-white/80 text-sm">Leadership Awaits</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Sparkles className="w-10 h-10 text-secondary mb-3 mx-auto" />
            <p className="text-3xl font-bold mb-1">Merit-Based</p>
            <p className="text-white/80 text-sm">Political Revolution</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a 
            href="#join-movement" 
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl"
          >
            Join the Youth Movement
          </a>
        </div>
      </div>
    </section>
  )
}
