import { Metadata } from 'next'
import PrivacyPolicyContent from '@/components/pages/PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Iqra | The Subac Circle collects, uses, and protects your personal information. Understand your privacy rights and how to exercise them.',
  openGraph: {
    title: 'Privacy Policy - Iqra | The Subac Circle',
    description: 'Comprehensive privacy policy covering data collection, usage, and user rights for our Islamic community app.',
  },
}

export default function PrivacyPage() {
  return <PrivacyPolicyContent />
}