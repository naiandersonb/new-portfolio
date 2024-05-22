interface SkillProps {
  name: string
  link: string
}

export function Skill({ link, name }: SkillProps) {
  return (
    <a
      className="dark:bg-stone-900 hover:text-stone-950 dark:hover:bg-amber-400 bg-stone-200 hover:bg-amber-400 py-2 px-4 rounded-md  transition-all ease-in-out"
      href={link}
      target="_blank"
    >
      {name}
    </a>
  )
}
