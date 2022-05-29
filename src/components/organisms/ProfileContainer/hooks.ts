import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export function useInjection() {
  const navigate = useNavigate()

  const onClickMessage = useCallback(e => {
    e.stopPropagation()
    navigate('/talk/:room_id')
  }, [])

  return {
    onClickMessage,
  }
}
