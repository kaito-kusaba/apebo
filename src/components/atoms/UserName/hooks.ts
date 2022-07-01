import { RootState } from 'components/redux'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {
  uid: string
  disabled?: boolean
  hasGender?: boolean
  hasPlatform?: boolean
}

export function useInjection({ uid, disabled, hasGender, hasPlatform }: Props) {
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const [username, setUsername] = useState<string>(user?.displayName!)
  const [platforms, setPlatforms] = useState<number[]>([])
  const [genders, setGenders] = useState<number[]>([])
  const location = useLocation()
  const navigate = useNavigate()

  const fetchDatas = async () => {
    if (uid === userData.uniqueId) {
      setUsername(userData.username!)
      if (hasPlatform) {
        setPlatforms(userData.platforms || [])
      }
      if (hasGender) {
        setGenders(userData.genders || [])
      }
    } else {
      const ref = doc(db, 'users', uid)
      const snap = await getDoc(ref)
      const data = snap.data()
      setUsername(data?.username)
      if (hasPlatform) {
        setPlatforms(data?.platforms || [])
      }
      if (hasGender) {
        setGenders(data?.genders || [])
      }
    }
  }

  useEffect(() => {
    fetchDatas()
  }, [uid, location.pathname])

  const onClick = useCallback(e => {
    if (!disabled) {
      e.stopPropagation()
      navigate(`/account/${uid}`)
    }
  }, [])

  return {
    username,
    platforms,
    genders,
    onClick,
  }
}
