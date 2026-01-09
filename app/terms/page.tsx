import { Metadata } from 'next'
import TermsOfServiceContent from '@/components/pages/TermsOfServiceContent'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions that govern your use of Iqra | The Subac Circle. Understand your rights and responsibilities as a user.',
  openGraph: {
    title: 'Terms of Service - Iqra | The Subac Circle',
    description: 'Complete terms and conditions for using our Islamic community app, including user rights, responsibilities, and community guidelines.',
  },
}

export default function TermsPage() {
  return <TermsOfServiceContent />
}