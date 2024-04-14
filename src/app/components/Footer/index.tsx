import Image from 'next/image'
import { SocialMediaList } from '../SocialMediaList'

export function Footer() {
  return (
    <footer className="mt-10 py-4 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6 text-stone-500">
        {SocialMediaList.map((socialMedia) => (
          <a
            className="opacity-60 hover:opacity-100"
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

      <p className="text-neutral-500 hover:text-neutral-100 cursor-pointer">
        naiandersonb.dev@gmail.com
      </p>
    </footer>
  )
}
