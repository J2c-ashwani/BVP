import { Metadata } from 'next'
import ExamHero from '@/components/candidate-exam/exam-hero'
import ExamSections from '@/components/candidate-exam/exam-sections'

export const metadata: Metadata = {
  title: 'BPSC-Style Candidate Exam System | Bihar Vikas Party',
  description: 'Bihar Vikas Party candidate selection through BPSC-style examination - transparent, merit-based, corruption-free leadership.',
}

export default function CandidateExamPage() {
  return (
    <>
      <ExamHero />
      <ExamSections />
    </>
  )
}
