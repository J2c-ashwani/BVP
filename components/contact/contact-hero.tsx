import Image from 'next/image'

export default function ContactHero() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0C2D72] to-[#1a4fa3] text-white">
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
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Get In Touch
        </h1>
        <p className="text-xl text-orange-100 max-w-2xl mx-auto">
          Contact Bihar Vikas Party for inquiries, media coverage, or to learn more about our movement
        </p>
      </div>
    </section>
  )
}
