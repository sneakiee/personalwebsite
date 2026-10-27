import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const ref = useRef(null)
  const Tag = as

  useEffect(() => {
    const el = ref.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || !('IntersectionObserver' in window)) {
      el.classList.add('is-in')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${className ? ` ${className}` : ''}`}
      style={delay ? { '--delay': `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
