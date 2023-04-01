import { getApiURL } from '@/utils/env'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body)
  const url = `${getApiURL('development')}/account?api_key=${
    process.env.NEXT_PUBLIC_API_KEY
  }&session_id=${body.session_id}`
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
