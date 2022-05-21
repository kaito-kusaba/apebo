import type { UserIconSize } from 'types/UserIconSize'
import UNSET40 from 'assets/images/icons/user/40_unset.png'
import UNSET46 from 'assets/images/icons/user/46_unset.png'
import UNSET72 from 'assets/images/icons/user/72_unset.png'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useEffect, useState } from 'react'

interface Props {
  size: UserIconSize
}

export function useInjection({ size }: Props) {
  const [defaultSrc, setDefaultSrc] = useState<string>('')
  const [src, setSrc] = useState<string>('')
  const { user } = useSelector(({ user }: RootState) => user)
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
  }, [size])

  useEffect(() => {
    if (user?.photoURL) {
      setSrc(user?.photoURL)
    } else {
      setSrc(defaultSrc)
    }
  }, [user?.photoURL, defaultSrc])

  return {
    src,
    user,
  }
}
