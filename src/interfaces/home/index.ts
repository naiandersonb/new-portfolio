export type StackType =
  | 'react'
  | 'typescript'
  | 'next js'
  | 'tailwind'
  | 'styled component'
  | 'node js'

export interface Project {
  title: string
  description?: string
  repository: string
  demo?: string
  image: string
  stacks?: any[]
}
