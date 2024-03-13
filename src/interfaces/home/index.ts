export type Stack =
  | 'react'
  | 'typescript'
  | 'next js'
  | 'tailwind'
  | 'styled component'
  | 'node js'

export interface Project {
  title: string
  description: string
  repoUrl: string
  demoUrl: string
  banner: string
  stacks?: Stack[]
}
