import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export function useInjection() {
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    navigate(-1)
  }, [])

  return {
    onClick,
  }
}
