import { LockSimple } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
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
  const t = useTranslations('Project')

  return isDisabled ? (
    <div className="flex uppercase text-xs font-bold rounded-full items-center gap-2 text-stone-500 cursor-not-allowed group relative">
      <LockSimple size={16} />
      {children}
      <div className="absolute opacity-0 group-hover:opacity-100 top-[-180%] w-[max-content] dark:bg-stone-800 bg-stone-50 p-1 rounded-md text-[12px] font-normal capitalize dark:text-stone-50 text-stone-950">
        {t('privateRepository')}
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
