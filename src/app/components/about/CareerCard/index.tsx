'use client'

import { Career } from '@/interfaces/about'
import { Briefcase, Student } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

interface CareerCardProps {
  career: Career
}

export function CareerCard({ career }: CareerCardProps) {
  const t = useTranslations('About')

  return (
    <div key={career.id} className="grid grid-cols-[30px_auto] gap-4">
      {career.type === 'course' ? (
        <Student className="dark:text-orange-300 text-orange-400" size={24} />
      ) : (
        <Briefcase className="dark:text-orange-300 text-orange-400" size={24} />
      )}

      <div>
        <p className="text-stone-500 text-sm">{career.period}</p>
        <p className="font-bold">{t(career.office)}</p>
        {career?.assignments && (
          <div className="mt-4">
            <p className="font-medium">
              {t('journey.career.assignmentsTitle')}
            </p>
            <ul className="border-l border-l-stone-50 dark:border-l-stone-800 pl-3 mt-5 flex flex-col gap-4">
              {career.assignments?.map((assignment, index) => (
                <li className="text-sm text-stone-500" key={index}>
                  {t(assignment)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
