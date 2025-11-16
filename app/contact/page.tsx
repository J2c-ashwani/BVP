import { Metadata } from 'next'
import ContactHero from '@/components/contact/contact-hero'
import ContactContent from '@/components/contact/contact-content'

export const metadata: Metadata = {
  title: 'Contact Us | Bihar Vikas Party',
  description: 'Get in touch with Bihar Vikas Party - office address, contact information, and media inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  )
}
