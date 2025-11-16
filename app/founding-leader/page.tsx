import { Metadata } from 'next'
import FoundingLeaderHero from '@/components/founding-leader/founding-leader-hero'
import FoundingLeaderContent from '@/components/founding-leader/founding-leader-content'

export const metadata: Metadata = {
  title: 'Founding Leader | Bihar Vikas Party',
  description: 'Meet Ashwani, the visionary founding leader of Bihar Vikas Party. Architect of India\'s first UPSC-style merit-based political candidate selection system.',
}

export default function FoundingLeaderPage() {
  return (
    <>
      <FoundingLeaderHero />
      <FoundingLeaderContent />
    </>
  )
}
