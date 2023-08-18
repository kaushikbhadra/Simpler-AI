import { UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
  return (
    <div>
      <p className='text-xl'>DashboardPage</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}
