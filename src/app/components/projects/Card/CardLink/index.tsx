import { LockSimple } from '@phosphor-icons/react'
import { ReactNode } from 'react'

interface CardLinkProps {
  children: ReactNode
  href: string
  isDisabled?: boolean
  icon?: JSX.Element
}

export function CardLink({
  children,
  href,
  icon = <></>,
  isDisabled = false,
}: CardLinkProps) {
  return isDisabled ? (
    <div className="flex uppercase text-xs font-bold rounded-full items-center gap-2 text-neutral-500 cursor-not-allowed group relative">
      <LockSimple size={16} />
      {children}
      <div className="absolute opacity-0 group-hover:opacity-100 top-[-180%] w-[max-content] bg-neutral-800 p-1 rounded-md text-[12px] font-normal capitalize text-neutral-300">
        Repositório privado
      </div>
    </div>
  ) : (
    <a
      className="flex uppercase text-xs font-bold rounded-full items-center gap-2 opacity-85 hover:opacity-100 hover:underline"
      href={href}
      target="_blank"
    >
      {!!icon && icon}
      {children}
    </a>
  )
}
