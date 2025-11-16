import { Metadata } from 'next'
import VisionHero from '@/components/vision/vision-hero'
import VisionSections from '@/components/vision/vision-sections'

export const metadata: Metadata = {
  title: 'Our Vision | Bihar Vikas Party',
  description: 'Bihar Vikas Party vision for Bihar - development for all, zero-corruption governance, education, healthcare, and job creation.',
}

export default function VisionPage() {
  return (
    <>
      <VisionHero />
      <VisionSections />
    </>
  )
}
