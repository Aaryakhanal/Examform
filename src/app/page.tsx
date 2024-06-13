import Link from 'next/link'
 
export default function Home() {
  const a= 2;
  return (
    <div>
      <h1>Hi aarya</h1>
      <Link href="/about">About</Link>
    </div>
  )
}