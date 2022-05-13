import { useCallback, useState } from 'react'
import { updateProfile } from 'firebase/auth'
import { auth } from 'libs/firebase'
import { actions } from 'components/redux/UserName'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function useInjection() {
  const [name, setName] = useState<string>('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChangeName = useCallback(e => {
    setName(e.target.value)
  }, [])

  const onClickSubmit = useCallback(() => {
    if (auth.currentUser) {
      dispatch(actions.setUserName(name))
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          console.log(name)
          navigate('/')
        })
        .catch(e => {
          alert('プロフィール更新に失敗')
          console.log(e)
        })
    }
  }, [name])

  return {
    name,
    onChangeName,
    onClickSubmit,
  }
}
