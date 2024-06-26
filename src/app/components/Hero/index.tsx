import { ArrowUpRight, Lightning } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { Reveal } from '../Revel'

export function Hero() {
  const t = useTranslations('Home')

  return (
    <Reveal>
      <div
        data-id="hero"
        className="flex flex-col justify-center md:h-[50vh] h-[60vh]"
      >
        <Lightning className="mb-4" size={32} />

        <h1 className="md:text-3xl text-2xl font-medium mb-4 md:max-w-[50%]">
          {t('hero.text')}
        </h1>

        <p className="md:text-base mt-10 text-sm flex items-center gap-2">
          {t('hero.currentJob')}
          <a
            className="text-primary font-medium flex items-center gap-3"
            href="https://themembersbrasil.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TheMembers <ArrowUpRight size={16} />
          </a>
        </p>
      </div>
    </Reveal>
  )
}
