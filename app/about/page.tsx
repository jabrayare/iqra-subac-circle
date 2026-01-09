import type { Metadata } from 'next'
import AboutContent from '@/components/pages/AboutContent'

export const metadata: Metadata = {
  title: 'About - Iqra | The Subac Circle',
  description: 'Learn about Iqra app, our mission to serve the Somali Muslim community worldwide, our story, values, and the team behind this Islamic community platform.',
  keywords: ['about Iqra', 'Islamic app mission', 'Somali Muslim community', 'our story', 'team', 'values'],
  openGraph: {
    title: 'About - Iqra | The Subac Circle',
    description: 'Discover the story and mission behind Iqra Islamic community app.',
    url: '/about',
  },
}

export default function AboutPage() {
  return <AboutContent />
}