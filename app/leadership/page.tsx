import { Metadata } from 'next'
import LeadershipHero from '@/components/leadership/leadership-hero'
import LeadershipTeam from '@/components/leadership/leadership-team'

export const metadata: Metadata = {
  title: 'Leadership | Bihar Vikas Party',
  description: 'Bihar Vikas Party founding leadership - President, Vice President, General Secretary, and Treasurer.',
}

export default function LeadershipPage() {
  return (
    <>
      <LeadershipHero />
      <LeadershipTeam />
    </>
  )
}
