import { Project } from './interfaces/home'

export const projects: Project[] = [
  {
    title: 'Project #01',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id sequi animi sint ducimus? Maxime quisquam distinctio quaerat, laboriosam beatae voluptatum, modi eius eum numquam dolores illo ea repudiandae et.',
    repoUrl: '#',
    demoUrl: '#',
    banner:
      'https://i.pinimg.com/564x/43/b8/14/43b814a795e8d3452d11cad9989e91a3.jpg',
    stacks: ['react', 'typescript', 'node js'],
  },
  {
    title: 'Project #02',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id sequi animi sint ducimus? Maxime quisquam distinctio quaerat, laboriosam beatae voluptatum, modi eius eum numquam dolores illo ea repudiandae et.',
    repoUrl: '#',
    demoUrl: '#',
    banner:
      'https://i.pinimg.com/736x/b8/85/a0/b885a0f95e9a63cb8342d443e248739b.jpg',
    stacks: ['react', 'next js', 'tailwind'],
  },
  {
    title: 'Project #03',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id sequi animi sint ducimus? Maxime quisquam distinctio quaerat, laboriosam beatae voluptatum, modi eius eum numquam dolores illo ea repudiandae et.',
    repoUrl: '#',
    demoUrl: '#',
    banner:
      'https://i.pinimg.com/564x/0b/ef/2d/0bef2dd58a0fd19005482d518cc25b57.jpg',
    stacks: [
      'react',
      'styled component',
      'next js',
      'node js',
      'tailwind',
      'typescript',
    ],
  },
  {
    title: 'Project #04',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id sequi animi sint ducimus? Maxime quisquam distinctio quaerat, laboriosam beatae voluptatum, modi eius eum numquam dolores illo ea repudiandae et.',
    repoUrl: '#',
    demoUrl: '#',
    banner:
      'https://i.pinimg.com/564x/91/f4/e5/91f4e5fec82785f7f8ba38f834a473f3.jpg',
  },
]

export const skills = [
  {
    name: 'Javascript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    image: 'javascript.svg',
  },
  {
    name: 'Typescript',
    link: 'https://www.typescriptlang.org',
    image: 'typescript.svg',
  },
  {
    name: 'React Js',
    link: 'https://react.dev',
    image: 'react.svg',
  },
  {
    name: 'Next.js',
    link: 'https://nextjs.org/',
    image: 'nextjs.svg',
  },
  {
    name: 'React Query',
    link: 'https://tanstack.com/query/latest',
    image: 'react-query.svg',
  },
  {
    name: 'Tailwind',
    link: 'https://tailwindcss.com/',
    image: 'tailwind.svg',
  },
]

export const career = [
  {
    id: '1',
    type: 'course',
    period: 'Ago 2020 - Set 2021',
    office: 'journey.career.technicalGraduation',
  },
  {
    id: '2',
    type: 'freelancer',
    period: 'Jan 2020 - jun 2020',
    office: 'journey.career.transfer',
  },
  {
    id: '3',
    type: 'work',
    period: 'Jun 2020 - present',
    office: 'journey.career.theMembers.title',
    assignments: [
      'journey.career.theMembers.assignments.one',
      'journey.career.theMembers.assignments.two',
      'journey.career.theMembers.assignments.three',
    ],
  },
]
