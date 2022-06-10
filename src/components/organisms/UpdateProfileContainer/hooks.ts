import { RootState } from 'components/redux'
import { actions } from 'components/redux/User'
import { doc, DocumentData, getDoc, updateDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useInjection() {
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const dispatch = useDispatch()
  const [fetchData, setFetchData] = useState<DocumentData>()
  const [newName, setNewName] = useState<string>(userData.username || fetchData?.username || '')
  const [discordId, setDiscordId] = useState<string>(userData.discordId || fetchData?.discord_id || '')
  const [bio, setBio] = useState<string>(userData.bio || fetchData?.bio || '')
  const [website, setWebsite] = useState<string>(userData.website || fetchData?.website || '')

  useEffect(() => {
    const userRef = doc(db, 'users', user!.uid)
    const fetchData = async () => {
      const userSnap = await getDoc(userRef)
      setFetchData(userSnap.data())
    }
    fetchData()
  }, [user!.uid])

  const onSubmit = useCallback(() => {
    const userRef = doc(db, 'users', user!.uid)
    updateDoc(userRef, {
      username: newName,
      discord_id: discordId,
      website: website,
      bio: bio,
    })
      .then(() => {
        dispatch(
          actions.setUserData({
            username: newName,
            discordId: discordId,
            website: website,
            bio: bio,
          }),
        )
        alert('プロフィールを更新しました。')
      })
      .catch(error => {
        console.log(error)
      })
  }, [newName, discordId, website, bio])

  const onChangeAvater = useCallback(() => {
    alert('アバターを編集')
  }, [])

  const onChangeDelete = useCallback(() => {
    alert('アバターを削除')
  }, [])

  const onChangeUserName = useCallback(e => {
    setNewName(e.target.value)
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

  return {
    user,
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
  }
}
