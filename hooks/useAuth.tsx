import Cookies from 'js-cookie'
import { useCallback, useEffect, useState } from 'react'

interface IAuth {
  token?: string
  session?: string
}

export interface IAccount {
  avatar?: {
    gravatar: {
      hash: string
    }
    tmdb: {
      avatar_path: string
    }
  }
  id?: number
  iso_639_1?: string
  iso_3166_1?: string
  name?: string
  include_adult?: boolean
  username?: string
}

export const useAuth = () => {
  const [auth, setAuth] = useState<IAuth>({})
  const [account, setAccount] = useState<IAccount>({})
  useEffect(() => {
    const token = Cookies.get('token')
    const session_id = localStorage.getItem('session_id')
    let result: IAuth = {}
    if (token) {
      result.token = token
    }

    if (session_id) {
      result.session = session_id
    }

    setAuth(result)
  }, [])
  const onUpdate = (data: IAuth) => {
    debugger
    setAuth(data)
  }

  console.log('auth-hello', auth)
  return {
    auth,
    account,
    setAuth: onUpdate,
    setAccount
  }
}
