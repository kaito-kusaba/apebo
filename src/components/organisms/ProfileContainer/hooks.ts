import { RootState } from 'components/redux'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

export function useInjection() {
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const params = useParams()
  const location = useLocation()
  const [followed, setFollowed] = useState<boolean>(true)

  const onClick = useCallback(() => {
    alert('follow')
  }, [])

  const f = async () => {
    if (location.pathname !== `/account/${user!.uid}`) {
      if (!userData.follows?.includes(params.uid!)) {
        setFollowed(false)
      } else {
        setFollowed(true)
      }
    } else {
      setFollowed(true)
    }
  }

  useEffect(() => {
    f()
  }, [])

  return {
    onClick,
    followed,
  }
}
