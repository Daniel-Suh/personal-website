interface Props {
  about: string
}

export default function About({ about }: Props) {
  return (
    <section id="about">
      <div className="container">
        <h2>About</h2>
        <p>{about}</p>
      </div>
    </section>
  )
}
