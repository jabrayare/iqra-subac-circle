import type { Metadata } from 'next'
import AppFeaturesContent from '@/components/pages/AppFeaturesContent'

export const metadata: Metadata = {
  title: 'App Features - Iqra | The Subac Circle',
  description: 'Discover the comprehensive features of Iqra app: Subac circle management, prayer times, Qibla finder, mosque locator, and more Islamic tools for the Somali Muslim community.',
  keywords: ['Islamic app features', 'Subac management', 'prayer times', 'Qibla finder', 'mosque finder', 'Islamic calendar'],
  openGraph: {
    title: 'App Features - Iqra | The Subac Circle',
    description: 'Explore all the powerful features of Iqra app designed for Somali Muslim community.',
    url: '/app',
  },
}

export default function AppFeaturesPage() {
  return <AppFeaturesContent />
}