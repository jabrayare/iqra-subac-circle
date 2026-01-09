import type { Metadata } from 'next'
import CommunityContent from '@/components/pages/CommunityContent'

export const metadata: Metadata = {
  title: 'Community - Iqra | The Subac Circle',
  description: 'Join the growing Iqra community of Somali Muslims worldwide. Connect, share, and grow together in faith through our Subac circles and Islamic activities.',
  keywords: ['Muslim community', 'Somali Muslims', 'Islamic community', 'Subac circles', 'religious gatherings'],
  openGraph: {
    title: 'Community - Iqra | The Subac Circle',
    description: 'Connect with fellow Muslims in the Iqra community worldwide.',
    url: '/community',
  },
}

export default function CommunityPage() {
  return <CommunityContent />
}