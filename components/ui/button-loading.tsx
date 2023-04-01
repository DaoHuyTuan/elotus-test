import { Button, ButtonProps } from './button'
import { Loader2 } from 'lucide-react'

interface Props extends ButtonProps {
  loading: boolean
  message: string
}

export const ButtonLoading = (props: Props) => {
  return (
    <Button
      disabled={props.loading}
      {...props}>
      {props.loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ''}
      {props.loading ? props.message : props.children}
    </Button>
  )
}
