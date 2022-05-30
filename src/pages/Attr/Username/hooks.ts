import { useCallback, useState, useEffect } from 'react'
import { updateProfile } from 'firebase/auth'
import { auth } from 'libs/firebase'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'components/redux'
import {
  PcIconPorpoise,
  XboxIconPorpoise,
  PlayStationIconPorpoise,
  SwitchIconPorpoise,
  MobileIconPorpoise,
} from 'components/atoms/Icon'
import type { PlayEnvTypes } from 'types/PlayEnvTypes'

type PlayEnvsObjectTypes = {
  env: PlayEnvTypes
  icon: string
}

export function useInjection() {
  const [name, setName] = useState<string>('')
  const navigate = useNavigate()
  const { user } = useSelector(({ user }: RootState) => user)
  const [disabled, setDisabled] = useState<boolean>(true)

  const maxLen = 20
  const envs: PlayEnvsObjectTypes[] = [
    { env: 'PC', icon: PcIconPorpoise },
    { env: 'PlayStation', icon: PlayStationIconPorpoise },
    { env: 'Xbox', icon: XboxIconPorpoise },
    { env: 'Switch', icon: SwitchIconPorpoise },
    { env: 'Mobile', icon: MobileIconPorpoise },
  ]

  useEffect(() => {
    setDisabled(!(name.length > 0) || false)
  }, [name])

  const onChangeName = useCallback(e => {
    setName(e.target.value)
  }, [])

  const onClickSubmit = useCallback(() => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          navigate('/')
        })
        .catch(e => {
          alert('プロフィール更新に失敗')
          console.log(e)
        })
    }
  }, [name])

  useEffect(() => {
    if (user?.displayName) {
      navigate('/')
    }
  }, [user])

  return {
    name,
    onChangeName,
    onClickSubmit,
    user,
    navigate,
    maxLen,
    envs,
    disabled,
  }
}
