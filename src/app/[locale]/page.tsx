'use client'

import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <>
      <Hero />

      <div id="projects">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <article
              key={item}
              className="w-full relative group aspect-square border border-neutral-700 rounded-xl overflow-hidden"
            >
              <div className="absolute p-8 inset-0 hidden group-hover:flex flex-col justify-between transition-all">
                <header>
                  <h2 className="font-bold mb-4">Project name</h2>
                  <p className="md:text-[1rem] text-[0.875rem]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                    aliquam sequi, qui deserunt, porro esse ipsam harum.
                  </p>
                </header>

                <footer className="flex items-center gap-8">
                  <a href="">Repository</a>
                  <a href="">Demo</a>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
