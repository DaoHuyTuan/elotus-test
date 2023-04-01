import { ButtonLoading } from './ui/button-loading'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IAccount, useAuth } from '@/hooks/useAuth'
import {
  ResponseCreateSession,
  ResponseGetAccount,
  ResponseRequestToken
} from '@/utils/response-api'
import { DialogClose } from '@radix-ui/react-dialog'
import Cookies from 'js-cookie'
import { ComponentIcon } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

interface FormLoginField {
  username?: string
  password?: string
}

interface UserLoginProps {
  account: IAccount
}

const UserLogined = (props: UserLoginProps) => {
  return (
    <div className="flex cursor-pointer content-center gap-2">
      <Image
        className="rounded-full"
        width={32}
        height={32}
        src={`${process.env.NEXT_PUBLIC_AVATAR_URL}/${props.account.avatar.gravatar.hash}`}
        alt="avatar"
      />
      <span>{props.account.username}</span>
    </div>
  )
}

export const LoginButton = () => {
  const [open, setOpen] = useState(false)
  const { auth, setAuth, setAccount, account } = useAuth()
  const [localAuth, setLocalAuth] = useState(auth)
  const [localAccount, setLocalAccount] = useState(account)
  const [form, setForm] = useState<FormLoginField>({})
  const [loading, setLoading] = useState(false)
  const onHandleForm = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }, [])

  //step 4
  const getUserAccount = useCallback(async (session_id: string) => {
    try {
      console.log('auth', auth)
      const res = await fetch('/api/account/getProfile', {
        method: 'POST',
        body: JSON.stringify({
          session_id: session_id
        })
      })
      const result: ResponseGetAccount = await res.json()
      if (result) {
        setAccount(result)
        setLoading(false)
        setOpen(false)
      }
    } catch (error) {}
  }, [])

  // step 3
  const onCreateSession = useCallback(async (request_token: string) => {
    try {
      const res = await fetch('/api/auth/createSession', {
        method: 'POST',
        body: JSON.stringify({
          request_token
        })
      })
      const result: ResponseCreateSession = await res.json()
      if (result.success) {
        await setAuth({ token: request_token, session: result.session_id })
        await getUserAccount(result.session_id)
      }
    } catch (error) {}
  }, [])

  // step 2
  const onLogin = useCallback(
    async (request_token: string) => {
      console.log('form', form)
      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            request_token,
            ...form
          })
        })
        const result: ResponseCreateSession = await res.json()
        if (result.success) {
          onCreateSession(request_token)
        }
      } catch (error) {}
    },
    [form, onCreateSession]
  )

  // step 1
  const onGetToken = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/auth/getToken', {
        method: 'GET'
      })
      const result: ResponseRequestToken = await res.json()
      if (result.success) {
        onLogin(result.request_token)
      }
    } catch (error) {}
  }

  useEffect(() => {
    setLocalAuth(auth)
  }, [auth])

  useEffect(() => {
    setLocalAccount(account)
  }, [account])
  console.log('localAccount', localAccount)
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {!open && localAuth && localAccount.username ? (
          <UserLogined account={localAccount} />
        ) : (
          <Button variant="outline">Login</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="grid grid-rows-2 items-center justify-items-start gap-2">
            <Label
              htmlFor="username"
              className="text-right">
              Username
            </Label>
            <Input
              type="text"
              id="username"
              placeholder="Ex: Zyye"
              name="username"
              value={form.username || ''}
              className="col-span-3"
              onChange={(e: ChangeEvent<HTMLInputElement>) => onHandleForm(e)}
            />
          </div>
          <div className="grid grid-rows-2 items-center justify-items-start gap-2">
            <Label
              htmlFor="password"
              className="text-right">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Type password"
              value={form.password || ''}
              type="password"
              className="col-span-3"
              onChange={(e: ChangeEvent<HTMLInputElement>) => onHandleForm(e)}
            />
          </div>
        </div>
        <DialogFooter>
          <ButtonLoading
            type="submit"
            message="Please wait"
            loading={loading}
            onClick={onGetToken}>
            Login
          </ButtonLoading>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
