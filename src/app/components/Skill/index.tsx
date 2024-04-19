import Image from 'next/image'

interface SkillProps {
  name: string
  image: string
  link: string
}

export function Skill({ image, link, name }: SkillProps) {
  return (
    <a
      className="flex text-sm items-center gap-4 opacity-70 hover:opacity-100 p-2 rounded-full"
      target="_blank"
      key={name}
      href={link}
    >
      <Image
        width={24}
        height={24}
        src={`/images/skills/${image}`}
        alt={name}
      />
      <h4 className="font-bold">{name}</h4>
    </a>
  )
}
