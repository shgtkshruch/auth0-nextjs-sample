import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="/api/auth/login">Login</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/api/auth/logout">Logout</Link>
      </li>
    </ul>
  )
}

export default Home
