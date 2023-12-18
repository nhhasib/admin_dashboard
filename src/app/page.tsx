import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <h1>Homepage
      </h1>
      <Link href={"/dashboard"}><button className='border bg-black text-white'>Dashboard</button></Link>
      </div>
    </main>
  )
}
