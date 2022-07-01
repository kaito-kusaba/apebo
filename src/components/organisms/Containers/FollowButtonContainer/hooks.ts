import { RootState } from 'components/redux'
import { actions } from 'components/redux/Modal'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
  uid: string
}

export function useInjection({ uid }: Props) {
  const { user } = useSelector(({ user }: RootState) => user)
  const [followed, setFollowed] = useState<boolean>(false)
  const [label, setLabel] = useState<string>('')
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const onClick = useCallback(async () => {
    if (user?.uid) {
      const ref = collection(db, 'follows')
      const followsCollectionRef = query(ref, where('follow_id', '==', user!.uid), where('follower_id', '==', uid))
      const querySnapshot = await getDocs(followsCollectionRef)
      if (querySnapshot.docs.length) {
        querySnapshot.forEach(async follow => {
          const followRef = doc(db, 'follows', follow.id)
          await deleteDoc(followRef)
          setFollowed(false)
        })
      } else {
        await addDoc(collection(db, 'follows'), {
          follow_id: user!.uid,
          follower_id: uid,
          created_at: new Date(),
        })
        setFollowed(true)
      }
    } else {
      dispatch(actions.setSignInModal(true))
    }
  }, [])

  const fetchUserData = async () => {
    const ref = collection(db, 'follows')
    const followsCollectionRef = query(ref, where('follow_id', '==', user!.uid), where('follower_id', '==', uid))
    onSnapshot(followsCollectionRef, querySnapshot => {
      //INFO:配列の中身を持ってきて存在する場合フォロー中、存在しない場合フォローしてない状態
      if (querySnapshot.docs.length) {
        setFollowed(true)
        setLabel('フォロー中')
      } else {
        setFollowed(false)
        setLabel('フォローする')
      }
    })
  }

  useEffect(() => {
    if (uid === user!.uid) {
      setFollowed(true)
    } else {
      fetchUserData()
    }
  }, [])

  useEffect(() => {
    if (followed) {
      isHovered ? setLabel('フォロー解除') : setLabel('フォロー中')
    }
  }, [isHovered])

  const onMouseToggle = useCallback(() => {
    setIsHovered(!isHovered)
  }, [isHovered, setIsHovered])

  return {
    onClick,
    followed,
    label,
    onMouseToggle,
  }
}
