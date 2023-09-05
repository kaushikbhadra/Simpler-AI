'use client'
import { useState } from 'react'
import axios from 'axios'
import { Zap } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface SubscriptionButtonProps {
  isPro: boolean
}

const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false)

  const onSubscribe = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/stripe')

      window.location.href = response.data.url
    } catch (error) {
      // toast.error("Something went wrong");
      console.log('BILLING: ' + error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      disabled={loading}
      onClick={onSubscribe}
      variant={isPro ? 'default' : 'premium'}
    >
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <Zap className='w-4 h-4 ml-2 fill-white' />}
    </Button>
  )
}
export default SubscriptionButton
