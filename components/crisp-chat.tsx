'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("273cb0d9-061b-4942-b7d0-8d8b32b196f7")
  }, [])

  return null
}
