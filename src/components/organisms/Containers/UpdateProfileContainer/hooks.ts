import { UNSET72 } from 'components/atoms/Icon'
import { RootState } from 'components/redux'
import { actions } from 'components/redux/User'
import { doc, DocumentData, getDoc, updateDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

type Props = {
  platformCheckedIds: number[]
  playStyleCheckedIds: number[]
  genderCheckedIds: number[]
}

export function useInjection({ platformCheckedIds, playStyleCheckedIds, genderCheckedIds }: Props) {
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const dispatch = useDispatch()
  const [fetchData, setFetchData] = useState<DocumentData>()
  const [newName, setNewName] = useState<string>(userData.username || fetchData?.username || '')
  const [discordId, setDiscordId] = useState<string>(userData.discordId || fetchData?.discord_id || '')
  const [bio, setBio] = useState<string>(userData.bio || fetchData?.bio || '')
  const [website, setWebsite] = useState<string>(userData.website || fetchData?.website || '')
  const [disabled, setDisabled] = useState<boolean>(false)
  const [iconImg, setIconImg] = useState<string | undefined>(userData.icon || fetchData?.icon || UNSET72)
  const navigate = useNavigate()

  const fetchUserData = async () => {
    const userRef = doc(db, 'users', user!.uid)
    const userSnap = await getDoc(userRef)
    setFetchData(userSnap.data())
  }

  useEffect(() => {
    fetchUserData()
  }, [user!.uid])

  useEffect(() => {
    setDisabled(!(newName.length > 0) || false)
  }, [newName])

  const onSubmit = useCallback(async () => {
    const userRef = doc(db, 'users', user!.uid)
    await updateDoc(userRef, {
      username: newName,
      discord_id: discordId,
      website: website,
      bio: bio,
      icon: iconImg,
      platforms: platformCheckedIds,
      play_styles: playStyleCheckedIds,
      genders: genderCheckedIds,
    })
      .then(() => {
        dispatch(
          actions.setUserData({
            username: newName,
            discordId: discordId,
            website: website,
            bio: bio,
            icon: iconImg,
            platforms: platformCheckedIds,
            playStyles: playStyleCheckedIds,
            genders: genderCheckedIds,
          }),
        )
        navigate(`/account/${user!.uid}`)
      })
      .catch(error => {
        console.log(error)
      })
  }, [newName, discordId, website, bio, iconImg, platformCheckedIds, playStyleCheckedIds, genderCheckedIds])

  const onChangeAvater = useCallback(e => {
    const files = e.target.files
    let file = files[0]
    let reader = new FileReader()
    reader.onload = event => {
      setIconImg(String(event.target?.result))
    }
    reader.readAsDataURL(file)
  }, [])

  const onChangeDelete = useCallback(() => {
    const deleteIcon = confirm('本当に削除しますか？')
    if (deleteIcon) {
      setIconImg(UNSET72)
    }
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
    disabled,
    onChangeWebsite,
    iconImg,
  }
}
