import { skills } from '@/data'
import { ArrowUpRight } from '@phosphor-icons/react'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center gap-4">
      <div className="aspect-square md:w-12 md:h-12 h-10 w-10 rounded-full overflow-hidden">
        <Image
          unoptimized
          src="https://i.pinimg.com/564x/d7/aa/e7/d7aae7fed0ebc45b4e1c4d1cca059ba6.jpg"
          width={64}
          height={64}
          alt=""
        />
      </div>

      <h1 className="text-[2rem]">
        Olá, eu me chamo Naianderson Bruno, <br />
        sou <span className="text-[#8A86DA]">desenvolvedor front-end.</span>
      </h1>

      <p className="mt-2 md:text-base text-sm text-stone-500 flex items-center gap-2">
        Front-end na{' '}
        <a
          className="dark:text-stone-200 text-stone-950 font-bold flex items-center gap-3"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          TheMembers <ArrowUpRight size={16} />
        </a>
      </p>

      <div className="flex items-center gap-4 mt-2">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:opacity-50 opacity-30 dark:hover:opacity-100 hover:opacity-100 transition-[opacity]"
          >
            <Image
              alt={skill.name}
              width={27}
              height={27}
              src={`/images/${skill.image}`}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
