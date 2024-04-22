import { Lightning } from '@phosphor-icons/react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="relative z-10 flex items-center gap-2">
      <div className="bg-primary flex items-center justify-center p-2 rounded-full">
        <Lightning className="text-neutral-100" size={16} />
      </div>
      <h1 className="font-bold md:w-full w-[11ch] md:text-base text-xs uppercase">
        Naianderson <span className="font-light">Bruno</span>
      </h1>
    </Link>
  )
}
