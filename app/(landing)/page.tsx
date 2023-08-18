import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div>
      <p className='text-xl'>landing Page </p>
      <Link href='/sign-up'>
        <Button>Register</Button>
      </Link>
      <Link href='/sign-in'>
        <Button>Login</Button>
      </Link>
    </div>
  )
}
