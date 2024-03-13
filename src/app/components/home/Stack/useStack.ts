import { StackProps } from './interface'

export function useStack({ stack }: StackProps) {
  const stackConfig = {
    typescript: 'bg-blue-400/10 dark:text-blue-400 text-blue-600',
    react: 'bg-cyan-400/10 dark:text-cyan-400 text-cyan-600',
    tailwind: 'bg-indigo-400/10 dark:text-indigo-400 text-indigo-600',
    'node js': 'bg-green-400/10 dark:text-green-400 text-green-600',
    'styled component': 'bg-orange-400/10 dark:text-orange-400 text-orange-600',
    'next js': 'bg-slate-400/10 dark:text-slate-50',
  }
  return stackConfig[stack] ?? 'bg-gray-400/10 text-gray-400'
}
