'use client'

import { JourneyCard } from '@/app/components/JourneyCard'
import { Reveal } from '@/app/components/Revel'
import { Skill } from '@/app/components/Skill'
import { skills } from '@/data'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { experiences } from './experiences'

export default function About() {
  const t = useTranslations('About')

  return (
    <Reveal width="100%">
      <main>
        <h1 className="md:text-3xl text-2xl font-medium mb-4">
          {t('pageTitle')}
        </h1>

        <div className="flex md:flex-row flex-col md:gap-24 gap-8">
          <section className="aspect-square w-[max-content]">
            <Image
              unoptimized
              className="rounded-lg"
              src="https://avatars.githubusercontent.com/u/72632956?v=4"
              alt="profile photo by Naianderson Bruno"
              width={200}
              height={200}
            />
          </section>

          <section className="flex-1">
            <p
              className="text-xl"
              dangerouslySetInnerHTML={{
                __html: t('aboutMe'),
              }}
            />

            <div className="mt-16">
              <h3 className="my-6 text-xl text-neutral-600">Skills</h3>

              <section className="grid md:grid-cols-3 grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <Skill
                    key={skill.name}
                    image={skill.image}
                    link={skill.link}
                    name={skill.name}
                  />
                ))}
              </section>
            </div>
          </section>
        </div>
        <div className="mt-16">
          <h3 className="my-10 text-xl">{t('journey.title')}</h3>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {experiences.map((experience) => (
              <JourneyCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </main>
    </Reveal>
  )
}
