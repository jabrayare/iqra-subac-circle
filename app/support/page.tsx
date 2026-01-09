import type { Metadata } from 'next'
import SupportContent from '@/components/pages/SupportContent'

export const metadata: Metadata = {
  title: 'Support - Iqra | The Subac Circle',
  description: 'Get help with Iqra app. Find answers to common questions, contact support, report issues, and access resources for using our Islamic community app.',
  keywords: ['app support', 'help center', 'FAQ', 'troubleshooting', 'contact support', 'Islamic app help'],
  openGraph: {
    title: 'Support - Iqra | The Subac Circle',
    description: 'Get help and support for using the Iqra Islamic community app.',
    url: '/support',
  },
}

export default function SupportPage() {
  return <SupportContent />
}