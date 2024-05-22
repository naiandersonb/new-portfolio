import { Project } from '@/interfaces/home'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Transfer: Viagens & Turismo',
    image: '/images/project-covers/transfer.png',
    repository: 'https://github.com/naiandersonb/transfer',
    isPrivate: true,
    demo: 'https://transfer-vt.vercel.app/',
    stacks: ['react', 'typescript', 'next js', 'sass'],
    description:
      'A Transfer: Viagens & Turismo é a primeira empresa legalizada do Sul do Brasil a trabalhar com transporte particular em veículos de até oito pessoas.<br/> <br/> O principal objetivo é eliminar a espera desnecessária por um veículo. Na na Transfer: V&T, não é você que espera por um veículo, é o veículo que espera por você.',
  },
  {
    id: 2,
    title: 'Devfinder',
    image: '/images/project-covers/devfinder.png',
    repository: 'https://github.com/naiandersonb/devfinder',
    demo: 'https://naiandersonb.github.io/devfinder/',
    stacks: ['HTML', 'CSS', 'Javascript'],
    description:
      'DevFinder é um projeto baseado no desafio proposto no site Frontend Mentor.<br/><br/> O desafio consiste em construir um aplicativo de pesquisa de usuário do GitHub usando a API de usuários da própria plataforma. O aplicativo deve ser responsivo e se adaptar a qualquer tipo de tela.',
  },
]
