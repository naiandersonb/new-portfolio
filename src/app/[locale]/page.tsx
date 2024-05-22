'use client'

import { projects } from '@/data/projects'
import { useTranslations } from 'next-intl'
import { Hero } from '../components/Hero'
import { Reveal } from '../components/Revel'
import { Card } from '../components/projects/Card'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <Reveal width="100%">
      <>
        <Hero />

        <div id="projects">
          <div className="border-b dark:border-stone-800 border-stone-200 py-2 mb-6">
            <h3 className="font-ibmPlexMono text-stone-500 uppercase font-medium text-sm">
              {t('projects')}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </div>
      </>
    </Reveal>
  )
}
