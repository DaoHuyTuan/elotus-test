import { IAccount } from '@/hooks/useAuth'

export interface ResponseRequestToken {
  success: boolean
  expires_at: string
  request_token: string
}

export interface ResponseCreateSession {
  success: boolean
  session_id: string
}

export interface ResponseGetAccount extends IAccount {}
