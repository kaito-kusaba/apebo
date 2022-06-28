import { useCallback } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export function useInjection() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  const onClick = useCallback(() => {
    if (location.pathname.match(/account/)) {
      navigate(`/account/${params.uid}`)
    } else {
      navigate(-1)
    }
  }, [])

  return {
    onClick,
  }
}
