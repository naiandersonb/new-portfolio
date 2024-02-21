import Image from 'next/image'

export function Jumbotron() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center gap-4">
      <div className="flex items-center gap-4">
        <div className="aspect-square md:w-12 md:h-12 h-10 w-10 rounded-full overflow-hidden">
          <Image
            unoptimized
            src="https://i.pinimg.com/564x/87/68/2f/87682f21175974d725b52ae64aa3c170.jpg"
            width={64}
            height={64}
            alt=""
          />
        </div>

        <h2 className="uppercase text-stone-500 md:text-base text-sm">
          Naianderson <br /> Bruno
        </h2>
      </div>

      <h1 className="md:text-7xl text-4xl uppercase font-extrabold">
        Desenvolvedor <br /> Front-End
      </h1>
    </div>
  )
}
