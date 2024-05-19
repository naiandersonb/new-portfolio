'use client'

import { Briefcase, Certificate } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

interface Tag {
  title: string
  className: string
}

interface Experience {
  id: number
  type: string
  period: string
  formation: string
  current?: boolean
  tag?: Tag
}

interface JourneyCardProps {
  experience: Experience
}

export function JourneyCard({ experience }: JourneyCardProps) {
  const t = useTranslations('About')

  const icon = useMemo(() => {
    if (experience.type === 'course') return <Certificate size={32} />
    if (experience.type === 'work') return <Briefcase size={32} />
    return null
  }, [experience])

  const border = experience?.current
    ? 'border-primary'
    : 'dark:border-stone-800 border-stone-200'

  return (
    <section
      key={experience.id}
      className={`flex justify-between flex-col gap-6 border p-4 rounded-md ${border} dark:bg-stone-950 bg-stone-100`}
    >
      <div className="w-10 flex items-center justify-center h-10 rounded-full text-primary">
        {icon}
      </div>

      <article className="rounded-md overflow-hidden p-2">
        <header className=" text-xs text-stone-500 mb-2 flex items-center gap-2">
          <p>{experience.period}</p>
          {experience?.tag && (
            <div
              className={`${experience.tag.className} w-[max-content] py-1 px-2 rounded-full`}
            >
              {experience?.tag.title}
            </div>
          )}
        </header>

        <div>
          <b>{t(experience.formation)}</b>
        </div>
      </article>
    </section>
  )
}
