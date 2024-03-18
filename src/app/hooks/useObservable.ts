import { useEffect, useRef } from 'react'

interface UseObservablePRops {
  onVisible: () => void
  onInvisible?: () => void
}

export function useObservable({ onVisible, onInvisible }: UseObservablePRops) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIsVisible = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top
        const elementBottom = ref.current.getBoundingClientRect().bottom

        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight

        // Verificar se o elemento está totalmente visível dentro do viewport
        if (elementTop >= 0 && elementBottom <= windowHeight) {
          onVisible()
        } else {
          if (onInvisible) onInvisible()
        }
      }
    }

    // Chamar a função de verificação quando a janela for redimensionada ou a página for rolada
    window.addEventListener('scroll', checkIsVisible)
    window.addEventListener('resize', checkIsVisible)

    // Chamar a função de verificação imediatamente após a montagem do componente
    checkIsVisible()

    // Remover os event listeners ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', checkIsVisible)
      window.removeEventListener('resize', checkIsVisible)
    }
  }, [])

  return ref
}
