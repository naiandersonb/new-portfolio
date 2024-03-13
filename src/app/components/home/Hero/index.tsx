import { skills } from '@/data'
import { ArrowUpRight } from '@phosphor-icons/react'
import Image from 'next/image'

export function Hero() {
  return (
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
          {/* &lt;desenvolvedor front-end./&gt; */}
          Desenvolvedor front-end
        </span>
      </h1>

      <p className="md:text-base text-sm text-stone-500 flex items-center gap-2">
        Atualmente front-end na{' '}
        <a
          className="dark:text-stone-200 text-stone-950 font-bold flex items-center gap-3"
          href="https://themembersbrasil.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TheMembers <ArrowUpRight size={16} />
        </a>
      </p>

      <div className="flex items-center gap-4">
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
