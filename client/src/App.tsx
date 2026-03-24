import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { PortfolioData } from './types'

export default function App() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json() as Promise<PortfolioData>
      })
      .then(setData)
      .catch(() => setError(true))
  }, [])

  if (error) return <div className="loading">Failed to load portfolio data.</div>
  if (!data) return <div className="loading">Loading…</div>

  return (
    <>
      <Nav name={data.profile.name} />
      <main>
        <Hero profile={data.profile} />
        <About about={data.profile.about} />
        <Achievements achievements={data.achievements} />
        <Skills skills={data.skills} />
        <Contact profile={data.profile} />
      </main>
      <Footer name={data.profile.name} />
    </>
  )
}
