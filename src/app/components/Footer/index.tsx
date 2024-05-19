import Image from 'next/image'
import { SocialMediaList } from '../SocialMediaList'

interface FooterProps {
  align?: 'items-center' | 'items-start' | 'items-end'
}

export function Footer({ align = 'items-center' }: FooterProps) {
  return (
    <footer
      className={`mt-10 py-4 flex flex-col-reverse md:flex-row justify-between gap-4 ${align}`}
    >
      <div className="flex items-center gap-3 text-stone-500">
        {SocialMediaList.map((socialMedia) => (
          <a
            className="dark:md:opacity-60 hover:opacity-100 border dark:border-transparent border-stone-600 bg-stone-950 rounded-md dark:bg-transparent"
            key={socialMedia.id}
            href={socialMedia.link}
            target="_blank"
          >
            <Image
              src={socialMedia.icon}
              alt={socialMedia.id}
              width={28}
              height={28}
            />
          </a>
        ))}
      </div>

      <p className="md:text-stone-500 dark:hover:text-stone-100 hover:text-stone-950 dark:text-stone-100 text-stone-700 cursor-pointer">
        naiandersonb.dev@gmail.com
      </p>
    </footer>
  )
}
