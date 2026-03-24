import { useEffect, useRef } from 'react'

interface Props {
  name: string
}

export default function Nav({ name }: Props) {
  const linksRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const links = linksRef.current?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links?.forEach((link) => {
              link.classList.toggle(
                'active',
                link.getAttribute('href') === `#${entry.target.id}`,
              )
            })
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header>
      <nav>
        <span className="nav-name">{name}</span>
        <ul ref={linksRef}>
          {['about', 'achievements', 'skills', 'contact'].map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => scrollTo(e, id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li><a href="resume.html">Resume</a></li>
        </ul>
      </nav>
    </header>
  )
}
