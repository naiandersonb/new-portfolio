interface SkillProps {
  name: string
  image: string
  link: string
}

export function Skill({ image, link, name }: SkillProps) {
  const skillStyles = {
    Javascript:
      'dark:bg-yellow-400/10 bg-yellow-100 dark:text-yellow-100 text-yellow-800',
    Typescript:
      'dark:bg-blue-400/10 dark:text-blue-100 bg-blue-100 text-blue-800',
    'React Js': 'dark:bg-sky-400/10 dark:text-sky-100 bg-sky-100 text-sky-800',
    'Next.js':
      'dark:bg-gray-400/10 dark:text-gray-100 bg-gray-100 text-gray-800',
    'React Query':
      'dark:bg-rose-400/10 dark:text-rose-100 bg-rose-100 text-rose-800',
    Tailwind:
      'dark:bg-cyan-400/10 dark:text-cyan-100 bg-cyan-100 text-cyan-800',
  } as const

  return (
    <a
      className={`flex text-sm items-center justify-center gap-4 group  rounded-full ${skillStyles[name as keyof typeof skillStyles]} p-2`}
      target="_blank"
      key={name}
      href={link}
    >
      {/* <div
        className={`p-2 rounded-full ${skillStyles[name as keyof typeof skillStyles]}`}
      >
        <Image
          width={16}
          height={16}
          src={`/images/skills/${image}`}
          alt={name}
        />
      </div> */}
      <h4 className="font-bold">{name}</h4>
    </a>
  )
}
