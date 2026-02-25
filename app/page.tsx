import HeroSection from '@/components/home/hero-section'
import AboutSection from '@/components/home/about-section'
import dynamic from 'next/dynamic'

const KeyPillars = dynamic(() => import('@/components/home/key-pillars'))
const WhyDifferent = dynamic(() => import('@/components/home/why-different'))
const CtaSection = dynamic(() => import('@/components/home/cta-section'))

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <KeyPillars />
      <WhyDifferent />
      <CtaSection />
    </>
  )
}
