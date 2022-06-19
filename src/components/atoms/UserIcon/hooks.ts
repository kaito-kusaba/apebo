import type { UserIconSize } from 'types/UserIconSize'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useCallback, useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useLocation, useNavigate } from 'react-router-dom'
import { CUSTOMICON, ENJOYICON, HEAVYICON, UNSET40, UNSET46, UNSET72 } from '../Icon'

type Props = {
  size: UserIconSize
  uid: string
  hasPlayStyle?: boolean
}

export function useInjection({ size, uid, hasPlayStyle }: Props) {
  const [defaultSrc, setDefaultSrc] = useState<string>('')
  const [src, setSrc] = useState<string>('')
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const navigate = useNavigate()
  const [playStyleImg, setPlayStyleImg] = useState<string>('')
  const [disable, setDisable] = useState<boolean>(false)
  const [isAccountPage, setIsAccountPage] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
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
    const f = async () => {
      if (uid === userData.uniqueId) {
        if (userData.icon) {
          setSrc(userData.icon)
        } else {
          setSrc(defaultSrc)
        }
      } else {
        const userRef = doc(db, 'users', uid)
        const userSnap = await getDoc(userRef)
        if (userSnap.data()?.icon) {
          setSrc(userSnap.data()?.icon)
        } else {
          setSrc(defaultSrc)
        }
      }
    }
    f()
  }, [uid, defaultSrc])

  const fetchUserData = useCallback(async () => {
    const userRef = doc(db, 'users', uid)
    const userSnap = await getDoc(userRef)
    if (hasPlayStyle) {
      switch (userSnap.data()?.play_styles?.toString()) {
        case '0':
          setPlayStyleImg(ENJOYICON)
          break
        case '1':
          setPlayStyleImg(HEAVYICON)
          break
        case '0,1':
          setPlayStyleImg(CUSTOMICON)
          break
        default:
          setDisable(true)
      }
    }
  }, [])

  useEffect(() => {
    if (uid === userData.uniqueId) {
      if (hasPlayStyle) {
        switch (userData.playStyles?.toString()) {
          case '0':
            setPlayStyleImg(ENJOYICON)
            break
          case '1':
            setPlayStyleImg(HEAVYICON)
            break
          case '0,1':
            setPlayStyleImg(CUSTOMICON)
            break
          default:
            setDisable(true)
        }
      }
    } else {
      fetchUserData()
    }
    setIsAccountPage(location.pathname.match(/account/) ? true : false)
  }, [])

  const onClick = useCallback(
    e => {
      e.stopPropagation()
      navigate(`/account/${uid}`)
    },
    [uid],
  )

  return {
    src,
    user,
    onClick,
    playStyleImg,
    disable,
    isAccountPage,
  }
}
