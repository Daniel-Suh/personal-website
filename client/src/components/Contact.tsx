import { Profile } from '../types'

interface Props {
  profile: Profile
}

export default function Contact({ profile }: Props) {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <p>Want to get in touch? Reach me at:</p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="resume.html">Resume</a>
        </div>
      </div>
    </section>
  )
}
