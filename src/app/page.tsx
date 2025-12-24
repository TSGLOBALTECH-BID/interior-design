'use client'

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ProjectsSection } from '@/components/projects-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative">
        <div className="pt-16 md:pt-20"> {/* Add padding to push content below navbar */}
          <Hero />
          <ProjectsSection />
        </div>
      </main>
    </div>
  )
}