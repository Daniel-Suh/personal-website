import { SkillGroup } from '../types'

interface Props {
  skills: SkillGroup[]
}

export default function Skills({ skills }: Props) {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-group">
              <h4>{group.category}</h4>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
