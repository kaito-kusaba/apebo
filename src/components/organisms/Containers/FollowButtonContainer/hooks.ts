import { RootState } from 'components/redux'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

type Props = {
  uid: string
}

export function useInjection({ uid }: Props) {
  const location = useLocation()
  const { userData } = useSelector(({ user }: RootState) => user)
  const [followed, setFollowed] = useState<boolean>(false)

  const onClick = useCallback(() => {
    alert('follow')
  }, [])

  const fetchUserData = () => {
    if (uid === userData.uniqueId) {
      setFollowed(true)
    } else {
      if (userData.follows?.includes(uid)) {
        setFollowed(true)
      } else {
        setFollowed(false)
      }
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [location])

  return {
    onClick,
    followed,
  }
}
