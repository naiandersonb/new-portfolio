'use client'

import { socialMediaList } from '../SocialMediaList'

interface FooterProps {
  align?: 'items-center' | 'items-start' | 'items-end'
}

export function Footer({ align = 'items-center' }: FooterProps) {
  return (
    <footer
      className={`mt-10 py-4 flex flex-col-reverse md:flex-row justify-between gap-4 ${align}`}
    >
      <div className="flex items-center gap-2">
        {socialMediaList.map((socialMedia) => (
          <a
            className="hover:bg-amber-400 p-2 rounded-full hover:dark:text-stone-950 dark:text-stone-50 text-stone-950"
            key={socialMedia.id}
            href={socialMedia.link}
            target="_blank"
          >
            {socialMedia.icon}
          </a>
        ))}
      </div>

      <p className="md:text-stone-500 dark:hover:text-stone-100 hover:text-stone-950 dark:text-stone-100 text-stone-700 cursor-pointer">
        naiandersonb.dev@gmail.com
      </p>
    </footer>
  )
}
