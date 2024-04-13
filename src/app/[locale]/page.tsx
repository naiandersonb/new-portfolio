'use client'

import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('Home')

  const socialMedia = [
    {
      id: 'linkedin',
      icon: <LinkedinLogo size={20} />,
      link: 'https://www.linkedin.com/in/naianderson-bruno/',
    },
    {
      id: 'github',
      icon: <GithubLogo size={20} />,
      link: 'https://github.com/naiandersonb',
    },
  ]

  return (
    <main className="min-h-full flex justify-end p-8 font-openSans">
      <div
        data-testid="sidebar"
        className="border border-neutral-700 rounded-xl p-6 fixed z-10 top-8 left-8 bottom-8 w-[290px] flex flex-col justify-between"
      >
        <div data-id="sidebar">
          <h1 className="text-neutral-100 font-bold text-2xl">
            Naianderson <br /> Bruno
          </h1>
          <div className="aspect-square rounded-xl mt-6 overflow-hidden">
            <Image
              unoptimized
              src="https://i.pinimg.com/736x/44/e3/c5/44e3c52f1efe7432dc71bad6e0a2f96c.jpg"
              width={300}
              height={450}
              alt=""
            />
          </div>
          <h3 className="text-neutral-100 font-bold text-lg mt-6">
            {t('hero.role')}
          </h3>
        </div>

        <div>
          <div>
            <p className="text-neutral-600">Localização:</p>
            <b className="text-neutral-100">Caxias - MA, Brasil</b>
          </div>
          <div className="flex gap-2 mt-4">
            {socialMedia.map((item) => (
              <a
                key={item.id}
                className="border text-neutral-400 hover:text-neutral-100 border-neutral-400 hover:border-neutral-100 p-2 rounded-full"
                href={item.link}
                target="_blank"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        data-id="header"
        className="left-[340px] right-8 fixed bg-red-200 h-[80px]"
      ></div>
      <div
        data-id="content"
        className="ml-[308px] flex flex-col justify-end w-[85vw] h-[80vh]"
      >
        <h1 className="text-5xl font-bold mb-4">Naianderson Bruno</h1>
        <h2 className="text-5xl bg-gradient-to-r from-[#B5764F] via-[#7F725F] to-[#293A3F ] inline-block text-transparent bg-clip-text">
          Desenvolvedor <br /> front-end
        </h2>

        <p>Atualmente</p>
        <p>
          Front-end na <a href="">TheMembers</a>
        </p>
      </div>
    </main>
  )
}
