import { getApiURL } from '@/utils/env'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `${getApiURL('development')}/authentication/token/new?api_key=${
    process.env.NEXT_PUBLIC_API_KEY
  }`
  if (url) {
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (result.ok) {
        const data = await result.json()
        return await res.status(200).json(data)
      }
    } catch (error) {}
  }
}
