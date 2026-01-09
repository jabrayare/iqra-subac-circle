import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import DownloadSection from '@/components/sections/DownloadSection'

export const metadata: Metadata = {
  title: 'Iqra | The Subac Circle - Islamic Community App',
  description: 'Manage Subac circles, track prayer times, find Qibla direction, and discover mosques. The essential app for the Somali Muslim community.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
    </>
  )
}