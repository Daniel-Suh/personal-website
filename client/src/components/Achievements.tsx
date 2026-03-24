import { Achievement } from '../types'

interface Props {
  achievements: Achievement[]
}

export default function Achievements({ achievements }: Props) {
  return (
    <section id="achievements">
      <div className="container">
        <h2>Achievements</h2>
        <div className="cards">
          {achievements.map((a, i) => (
            <div key={i} className="card">
              <div className="card-icon">{a.icon}</div>
              <h3>{a.title}</h3>
              <p className="card-meta">{a.meta}</p>
              <p>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
