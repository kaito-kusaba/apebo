import { useCallback, useEffect, useState } from 'react'
import { updateProfile } from 'firebase/auth'
import { auth } from 'libs/firebase'
import { actions } from 'components/redux/UserName'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function useInjection() {
  const [name, setName] = useState<string>('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(name)
  }, [name])

  const onChangeName = useCallback(
    e => {
      setName(e.target.value)
    },
    [name],
  )

  const onClickSubmit = useCallback(() => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          dispatch(actions.setUserName(name))
          console.log(name)
          navigate('/top')
        })
        .catch(e => {
          alert('プロフィール更新に失敗')
          console.log(e)
        })
    } else {
      alert('ユーザーがない')
    }
  }, [])

  return {
    name,
    onChangeName,
    onClickSubmit,
  }
}
