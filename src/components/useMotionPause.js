import { useEffect } from 'react'

// Toggle a class instead of React state: animations pause only when the
// illustration leaves the viewport, never on every animation frame.
export default function useMotionPause(ref, rootMargin = '180px 0px') {
  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        node.classList.toggle('is-motion-paused', !entry.isIntersecting)
      },
      { rootMargin },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      node.classList.remove('is-motion-paused')
    }
  }, [ref, rootMargin])
}
