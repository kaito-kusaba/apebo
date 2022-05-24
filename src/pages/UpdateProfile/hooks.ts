import { RootState } from 'components/redux'
import { actions } from 'components/redux/User'
import { updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import { auth, db } from 'libs/firebase'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useInjection() {
  const { user } = useSelector(({ user }: RootState) => user)
  const [newName, setNewName] = useState<string>('')
  const dispatch = useDispatch()

  const onChange = useCallback(e => {
    setNewName(e.target.value)
  }, [])

  const onSubmit = useCallback(() => {
    const userRef = doc(db, 'users', user!.uid)
    updateDoc(userRef, {
      username: newName,
    })
    updateProfile(auth.currentUser!, {
      displayName: newName,
    })
      .then(() => {
        dispatch(actions.setUser(auth.currentUser!))
        alert('プロフィールを更新しました。')
      })
      .catch(error => {
        console.log(error)
      })
  }, [newName])

  return {
    newName,
    onChange,
    onSubmit,
  }
}
