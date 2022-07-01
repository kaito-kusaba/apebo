import { useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export function useInjection() {
  const [searchParams] = useSearchParams()
  const docId = searchParams.get('doc')
  const uid = searchParams.get('user')
  const navigate = useNavigate()
  const onClick = useCallback(() => {
    navigate(-1)
  }, [])

  return {
    docId,
    uid,
    onClick,
  }
}
