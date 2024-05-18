import Image from 'next/image'

interface SkillProps {
  name: string
  image: string
  link: string
}

export function Skill({ image, link, name }: SkillProps) {
  const skillStyles = {
    Javascript: 'bg-yellow-400',
    Typescript: 'bg-blue-400',
    'React Js': 'bg-sky-400',
    'Next.js': 'bg-gray-400',
    'React Query': 'bg-rose-400',
    Tailwind: 'bg-cyan-400',
  } as const

  return (
    <a
      className="flex text-sm items-center gap-4 group  rounded-full"
      target="_blank"
      key={name}
      href={link}
    >
      <div
        className={`p-2 rounded-full ${skillStyles[name as keyof typeof skillStyles]}`}
      >
        <Image
          width={16}
          height={16}
          src={`/images/skills/${image}`}
          alt={name}
        />
      </div>
      <h4 className="font-bold opacity-75 group-hover:opacity-100">{name}</h4>
    </a>
  )
}
