import { Metadata } from 'next'
import ConstitutionHero from '@/components/constitution/constitution-hero'
import ConstitutionContent from '@/components/constitution/constitution-content'

export const metadata: Metadata = {
  title: 'Party Constitution | Bihar Vikas Party',
  description: 'Bihar Vikas Party Constitution - the governing document outlining our principles, structure, and operations.',
}

export default function ConstitutionPage() {
  return (
    <>
      <ConstitutionHero />
      <ConstitutionContent />
    </>
  )
}
