import { RootState } from 'components/redux'
import { actions } from 'components/redux/User'
import { updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import { auth, db } from 'libs/firebase'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useInjection() {
  const { user } = useSelector(({ user }: RootState) => user)
  const [newName, setNewName] = useState<string>(user!.displayName!)
  const dispatch = useDispatch()
  const [bio, setBio] = useState<string>('')
  const [discordId, setDiscordId] = useState<string>('')
  const [website, setWebsite] = useState<string>('')
  const [clicked, setClicked] = useState<boolean>(false)

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

  const onChangeUserName = useCallback(e => {
    setNewName(e.target.value)
  }, [])

  const onChangeAvater = useCallback(() => {
    alert('アバターを編集')
  }, [])

  const onChangeDelete = useCallback(() => {
    alert('アバターを削除')
  }, [])

  const onChangeBio = useCallback(e => {
    setBio(e.target.value)
  }, [])

  const onChangeDiscordId = useCallback(e => {
    setDiscordId(e.target.value)
  }, [])

  const onChangeWebsite = useCallback(e => {
    setWebsite(e.target.value)
  }, [])

  const onChangeRelease = useCallback(() => {
    setClicked(!clicked)
    alert('clicked')
  }, [])

  return {
    newName,
    onChangeUserName,
    onSubmit,
    onChangeAvater,
    onChangeDelete,
    bio,
    discordId,
    website,
    onChangeBio,
    onChangeDiscordId,
    onChangeWebsite,
    clicked,
    onChangeRelease,
  }
}
