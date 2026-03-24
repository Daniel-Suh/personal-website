interface Props {
  name: string
}

export default function Footer({ name }: Props) {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  )
}
