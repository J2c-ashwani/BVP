import Image from 'next/image'

export default function ConstitutionHero() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-[#1a4fa3] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <Image 
            src="/logo.png" 
            alt="Bihar Vikas Party Logo" 
            width={80} 
            height={80}
            className="h-20 w-auto"
          />
        </div>
        
        {/* Border instead of semi-transparent background for better contrast */}
        <div className="border-2 border-white/30 rounded-lg p-6 mb-6 backdrop-blur-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
            Important Notice
          </h3>
          <p className="text-sm text-white/90">
            Bihar Vikas Party is currently a proposed political party. Registration 
            application will be submitted to the Election Commission of India in due course.
          </p>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
          Party Constitution
        </h1>
        <p className="text-xl text-white/90">
          The governing document of Bihar Vikas Party
        </p>
      </div>
    </section>
  )
}
