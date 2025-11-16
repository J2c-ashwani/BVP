import { Metadata } from 'next'
import JoinHero from '@/components/join/join-hero'
import JoinForm from '@/components/join/join-form'

export const metadata: Metadata = {
  title: 'Join Bihar Vikas Party | Become a Member',
  description: 'Join Bihar Vikas Party - Free membership for all citizens of Bihar committed to transparent governance and merit-based leadership.',
}

export default function JoinPage() {
  return (
    <>
      <JoinHero />
      <JoinForm />
    </>
  )
}
