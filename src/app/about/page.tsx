import { career } from '@/data'
import Image from 'next/image'
import { CareerCard } from '../components/about/CareerCard'

export default function AboutMe() {
  return (
    <div className="container min-h-[90vh] mt-[15vh]">
      <div
        data-id="about me"
        className="flex flex-col items-center justify-center gap-6"
      >
        <div className="aspect-square overflow-hidden rounded-xl">
          <Image
            unoptimized
            src="https://i.pinimg.com/736x/44/e3/c5/44e3c52f1efe7432dc71bad6e0a2f96c.jpg"
            width={200}
            height={200}
            alt="photo by naianderson Bruno"
          />
        </div>

        <h2 className="md:max-w-[55%] text-center text-stone-500 text-xl">
          Olá, me chamo Naianderson Bruno, atualmente moro em Caxias, MA. Sou
          desenvolvedor front-end a mais de 2 anos.
        </h2>
      </div>

      <div className="my-20 md:max-w-[70%] mx-auto ">
        <h3 className="font-bold text-xl">Minha jornada</h3>

        <div className="mt-6 flex flex-col gap-6 ">
          {career.map((careerItem) => (
            <CareerCard key={careerItem.id} career={careerItem} />
          ))}
        </div>
      </div>
    </div>
  )
}
