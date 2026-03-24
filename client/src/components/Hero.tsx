import { Profile } from '../types'

interface Props {
  profile: Profile
}

export default function Hero({ profile }: Props) {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-sub">{profile.sub}</p>
          <a
            href="#achievements"
            className="btn"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View my work
          </a>
        </div>
        <div className="hero-photo">
          <img src="/images/profile.jpeg" alt={profile.name} />
        </div>
      </div>
    </section>
  )
}
