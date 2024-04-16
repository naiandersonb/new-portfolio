'use client'

import { Briefcase, Certificate } from '@phosphor-icons/react'
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
  const icon = useMemo(() => {
    if (experience.type === 'course') return <Certificate size={32} />
    if (experience.type === 'work') return <Briefcase size={32} />
    return null
  }, [experience])

  const border = experience?.current ? 'border-[#1C7980]' : 'border-neutral-800'

  return (
    <section
      key={experience.id}
      className={`flex justify-between flex-col gap-6 border p-4 rounded-md ${border}`}
    >
      <div className="w-10 flex items-center justify-center h-10 rounded-full text-[#1C7980]">
        {icon}
      </div>

      <article className="rounded-md overflow-hidden p-2">
        <header className=" text-xs text-neutral-200 mb-2 flex items-center gap-2">
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
          <b>{experience.formation}</b>
        </div>
      </article>
    </section>
  )
}
