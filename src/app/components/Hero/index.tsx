import { ArrowUpRight, Lightning } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('Home')

  return (
    <div data-id="hero" className="flex flex-col justify-center h-[50vh]">
      <Lightning className="mb-4 text-neutral-600" size={32} />

      <h1 className="text-3xl font-medium mb-4 md:max-w-[50%]">
        Hey there! I&apos;m a frontend developer building intuitive web
        applications and user-centric solutions.
      </h1>

      <p className="md:text-base mt-10 text-sm text-stone-500 flex items-center gap-2">
        Currently front-end at
        <a
          className="text-stone-200 font-medium flex items-center gap-3"
          href="https://themembersbrasil.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TheMembers <ArrowUpRight size={16} />
        </a>
      </p>
    </div>
  )
}
