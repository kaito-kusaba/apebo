import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export function useInjection() {
  const [label, setLabel] = useState<string>('')
  const [pageIndex, setPageIndex] = useState<number>()
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case `/account/${params.uid}/follows`:
        setLabel('フォロー中')
        setPageIndex(0)
        break
      case `/account/${params.uid}/followers`:
        setLabel('フォロワー')
        setPageIndex(1)
        break
    }
  }, [location])

  const onClickFollow = useCallback(() => {
    navigate(`/account/${params.uid}/follows`)
  }, [])

  const onClickFollower = useCallback(() => {
    navigate(`/account/${params.uid}/followers`)
  }, [])

  return {
    onClickFollower,
    onClickFollow,
    label,
    location,
    params,
    pageIndex,
  }
}
