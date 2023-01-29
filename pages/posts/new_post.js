import Link from 'next/link'


export default function new_post() {
  return (
    <>
      <h1>First Post</h1>
      Hello world.
      <Link href="/">Back</Link>
    </>
  )
}