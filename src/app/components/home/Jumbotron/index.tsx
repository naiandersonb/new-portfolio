import { ArrowUpRight } from '@phosphor-icons/react'
import Image from 'next/image'

export function Jumbotron() {
  return (
    <div className="md:min-h-[70vh] min-h-[50vh] flex flex-col justify-center gap-4">
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
        sou <span className="text-[#8A86DA]">desenvolvedor web front-end.</span>
      </h1>

      <p className="md:mt-4 mt-2 md:text-base text-sm text-stone-500 flex items-center gap-2">
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
    </div>
  )
}
