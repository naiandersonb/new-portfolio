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
      <div className="flex items-center gap-6 text-stone-500">
        {SocialMediaList.map((socialMedia) => (
          <a
            className="md:opacity-60 hover:opacity-100"
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

      <p className="md:text-neutral-500 hover:text-neutral-100 text-neutral-100 cursor-pointer">
        naiandersonb.dev@gmail.com
      </p>
    </footer>
  )
}
