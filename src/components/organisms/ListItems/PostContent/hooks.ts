import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  docId: string
  uid: string
}

export function useInjection({ docId, uid }: Props) {
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    navigate(`/post?user=${uid}&doc=${docId}`)
  }, [])

  return {
    onClick,
  }
}
