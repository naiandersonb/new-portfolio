'use client'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <main className="min-h-full p-8 font-openSans  max-w-[1200px] w-full mx-auto">
      <Header />
      <Hero />

      <div id="projects">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <article
              key={item}
              className="w-full aspect-square border border-neutral-700 p-8 rounded-xl"
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
                velit amet ratione dicta pariatur eos nulla nihil aut iusto
                consequuntur incidunt ullam magni. Iste eum est alias tempore
                consequuntur? Laudantium.
              </p>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
