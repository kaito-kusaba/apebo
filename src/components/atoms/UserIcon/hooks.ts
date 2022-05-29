import type { UserIconSize } from 'types/UserIconSize'
import UNSET40 from 'assets/images/icons/user/40_unset.png'
import UNSET46 from 'assets/images/icons/user/46_unset.png'
import UNSET72 from 'assets/images/icons/user/72_unset.png'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useCallback, useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useNavigate } from 'react-router-dom'

interface Props {
  size: UserIconSize
  uid: string
}

export function useInjection({ size, uid }: Props) {
  const [defaultSrc, setDefaultSrc] = useState<string>('')
  const [src, setSrc] = useState<string>('')
  const { user } = useSelector(({ user }: RootState) => user)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('load')
    const f = async () => {
      const userRef = doc(db, 'users', uid)
      const userSnap = await getDoc(userRef)
      if (userSnap.data()?.icon) {
        setSrc(userSnap.data()?.icon)
      } else {
        setSrc(defaultSrc)
      }
    }
    f()
    switch (size) {
      case 40: {
        setDefaultSrc(UNSET40)
        break
      }
      case 46: {
        setDefaultSrc(UNSET46)
        break
      }
      case 72: {
        setDefaultSrc(UNSET72)
        break
      }
      default: {
        setDefaultSrc(UNSET40)
        break
      }
    }
  }, [])

  const onClick = useCallback(e => {
    e.stopPropagation()
    navigate(`/account/${uid}`)
  }, [])

  return {
    src,
    user,
    onClick,
  }
}
