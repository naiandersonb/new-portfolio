import { JourneyCard } from '@/app/components/JourneyCard'
import { skills } from '@/data'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { experiences } from './experiences'

export default function About() {
  const t = useTranslations('About')

  return (
    <main>
      <h1 className="md:text-3xl text-2xl font-medium mb-4">About me</h1>

      <div className="flex gap-24">
        <section
          data-id="avatar"
          className="max-w-[365px] w-full h-[365px] bg-green-400"
        ></section>
        <section className="flex-1">
          <p className="text-2xl max-w-[80%]">{t('heading')}</p>

          <div className="mt-11">
            <h3 className="my-10 text-xl text-neutral-600">Skills</h3>

            <section className="grid grid-cols-3 gap-2">
              {skills.map((skill) => (
                <a
                  className="flex text-sm items-center gap-4 opacity-70 hover:opacity-100 p-2 rounded-full"
                  target="_blank"
                  key={skill.name}
                  href={skill.link}
                >
                  <Image
                    width={24}
                    height={24}
                    src={`/images/skills/${skill.image}`}
                    alt={skill.name}
                  />
                  <h4 className="font-bold">{skill.name}</h4>
                </a>
              ))}
            </section>
          </div>
        </section>
      </div>
      <div className="mt-16">
        <h3 className="my-10 text-xl text-neutral-600">
          Training and experiences
        </h3>

        <div className="flex flex-col gap-3">
          {experiences.map((experience) => (
            <JourneyCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </main>
  )
}
