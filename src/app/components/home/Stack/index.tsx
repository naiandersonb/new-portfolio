import { StackProps } from './interface'
import { useStack } from './useStack'

export function Stack({ stack }: StackProps) {
  const stackConfig = useStack({ stack })

  return (
    <div
      className={`${stackConfig} px-3 py-1 capitalize rounded-full md:text-sm text-xs`}
    >
      {stack}
    </div>
  )
}
