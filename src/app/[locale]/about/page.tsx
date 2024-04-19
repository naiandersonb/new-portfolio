'use client'

import { JourneyCard } from '@/app/components/JourneyCard'
import { Reveal } from '@/app/components/Revel'
import { Skill } from '@/app/components/Skill'
import { skills } from '@/data'
import { useTranslations } from 'next-intl'
import { experiences } from './experiences'

export default function About() {
  const t = useTranslations('About')

  return (
    <Reveal width="100%">
      <main>
        <h1 className="md:text-3xl text-2xl font-medium mb-4">About me</h1>

        <div className="flex md:flex-row flex-col md:gap-24 gap-10">
          <section
            data-id="avatar"
            className="max-w-[365px] w-full h-[365px] bg-green-400 rounded-md"
          />

          <section className="flex-1">
            <p className="text-xl py-3">
              Hello! I&rsquo;m Naianderson Bruno, a front-end developer based in
              Caxias, MA, with over two years of experience.
            </p>
            <p className="text-xl py-3">
              I&rsquo;m passionate about turning ideas into captivating
              interfaces, navigating the nuances of HTML, CSS, and JavaScript.
            </p>
            <p className="text-xl py-3">
              In each project, I strive for not only functionality but also to
              create memorable experiences. I&rsquo;m always ready to tackle
              challenges and turn obstacles into opportunities, bringing energy
              and creativity to every line of code.
            </p>

            <div className="mt-16">
              <h3 className="my-6 text-xl text-neutral-600">Skills</h3>

              <section className="grid md:grid-cols-3 grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <Skill
                    key={skill.name}
                    image={skill.image}
                    link={skill.link}
                    name={skill.name}
                  />
                ))}
              </section>
            </div>
          </section>
        </div>
        <div className="mt-16">
          <h3 className="my-10 text-xl">Training and experiences</h3>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {experiences.map((experience) => (
              <JourneyCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </main>
    </Reveal>
  )
}
