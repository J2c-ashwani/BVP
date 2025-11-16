import { Metadata } from 'next'
import YouthHero from '@/components/youth-message/youth-hero'
import YouthContent from '@/components/youth-message/youth-content'

export const metadata: Metadata = {
  title: 'Message to the Youth | Bihar Vikas Party',
  description: 'A message from Ashwani, Founding Leader of BVP, to the youth of Bihar. Join the movement for merit-based politics and a new Bihar.',
}

export default function YouthMessagePage() {
  return (
    <>
      <YouthHero />
      <YouthContent />
    </>
  )
}
