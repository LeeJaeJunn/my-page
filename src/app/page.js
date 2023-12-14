import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center space-y-10  p-24">
      <div>
        <h1>jj Page main</h1>
      </div>
      <Link href={"/training"}>
        training
      </Link>
      <Link href={"/game"}>
        game
      </Link>
    </main>
  )
}
