'use client'

import { ArrowUpRight } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main className="container md:h-[90vh] h-[83vh]">
      <div className="flex flex-col justify-center gap-4 h-full">
        <div className="aspect-square md:w-12 md:h-12 h-10 w-10 rounded-full overflow-hidden">
          <Image
            unoptimized
            src="https://i.pinimg.com/736x/44/e3/c5/44e3c52f1efe7432dc71bad6e0a2f96c.jpg"
            width={64}
            height={64}
            alt=""
          />
        </div>
        <h1 className="md:text-[2rem] text-[1.5rem]">
          Naianderson Bruno, <br />
          <span className="dark:text-neutral-700 text-neutral-400">
            {t('hero.role')}
          </span>
        </h1>

        <p className="md:text-base text-sm text-stone-500 flex items-center gap-2">
          {t('hero.currentJob')}{' '}
          <a
            className="dark:text-stone-200 text-stone-950 font-bold flex items-center gap-3"
            href="https://themembersbrasil.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TheMembers <ArrowUpRight size={16} />
          </a>
        </p>
      </div>
    </main>
  )
}
