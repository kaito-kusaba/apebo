import { RootState } from 'components/redux'
import { actions } from 'components/redux/Modal'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

type Props = {
  uid: string
}

export function useInjection({ uid }: Props) {
  const location = useLocation()
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const [followed, setFollowed] = useState<boolean>(false)
  const dispatch = useDispatch()

  const onClick = useCallback(() => {
    if (user?.uid) {
      alert('follow')
    } else {
      dispatch(actions.setSignInModal(true))
    }
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
