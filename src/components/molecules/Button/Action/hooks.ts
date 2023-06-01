import { useCallback, useEffect, useState } from 'react'
import { ActionButtonTypes } from 'types/ActionButtonTypes'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useNavigate } from 'react-router-dom'
import { actions as modalActions } from 'components/redux/Modal'
import { actions as actionSheetActions } from 'components/redux/ActionSheet'
import {
  DotsIconGray,
  FOLLOW_DEFAULT,
  LIKE_ACTIVE,
  LIKE_DEFAULT,
  MessageIconGray,
  MESSAGE,
  FOLLOW_ACTIVE,
} from 'components/atoms/Icon'
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { db } from 'libs/firebase'
import { actions } from 'components/redux/User'

type Props = {
  uid: string
  type: ActionButtonTypes
  docId?: string
}

export function useInjection({ type, uid, docId }: Props) {
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const [buttonImageSrc, setButtonImageSrc] = useState<string>('')
  const [isSelectedLike, setIsSelectedLike] = useState<boolean>(false)
  const [isFollowed, setIsFollowed] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchFollowData = async () => {
    const ref = collection(db, 'follows')
    const followsCollectionRef = query(ref, where('follow_id', '==', user!.uid), where('follower_id', '==', uid))
    onSnapshot(followsCollectionRef, querySnapshot => {
      //INFO:配列の中身を持ってきて存在する場合フォロー中、存在しない場合フォローしてない状態
      if (querySnapshot.docs.length) {
        setIsFollowed(true)
      } else {
        setIsFollowed(false)
      }
    })
  }

  useEffect(() => {
    fetchFollowData()
  }, [])

  useEffect(() => {
    switch (type) {
      case 'Message':
        setButtonImageSrc(MESSAGE)
        break
      case 'Like':
        isSelectedLike ? setButtonImageSrc(LIKE_ACTIVE) : setButtonImageSrc(LIKE_DEFAULT)
        break
      case 'Follow':
        isFollowed ? setButtonImageSrc(FOLLOW_ACTIVE) : setButtonImageSrc(FOLLOW_DEFAULT)
        break
      case 'Other':
        setButtonImageSrc(DotsIconGray)
        break
      case 'ProfileOther':
        setButtonImageSrc(DotsIconGray)
        break
      case 'ProfileMessage':
        setButtonImageSrc(MessageIconGray)
        break
    }
  }, [isSelectedLike, isFollowed])

  const onClickActionButton = useCallback(
    e => {
      switch (type) {
        case 'Message':
          e.stopPropagation()
          if (user?.uid) {
            onClickMessage()
          } else {
            dispatch(modalActions.setSignInModal(true))
          }
          break
        case 'Like':
          e.stopPropagation()
          if (user?.uid) {
            setIsSelectedLike(!isSelectedLike)
          } else {
            dispatch(modalActions.setSignInModal(true))
          }
          break
        case 'Follow':
          e.stopPropagation()
          if (user?.uid) {
            onClickFollow()
          } else {
            dispatch(modalActions.setSignInModal(true))
          }
          break
        case 'Other':
          e.stopPropagation()
          onClickOther(e)
          break
        case 'ProfileMessage':
          e.stopPropagation()
          if (user?.uid) {
            onClickMessage()
          } else {
            dispatch(modalActions.setSignInModal(true))
          }
          break
        case 'ProfileOther':
          e.stopPropagation()
          if (user?.uid) {
            onClickProfileOther(e)
          } else {
            dispatch(modalActions.setSignInModal(true))
          }
          break
      }
    },
    [isSelectedLike],
  )

  const onClickFollow = async () => {
    const ref = collection(db, 'follows')
    const followsCollectionRef = query(ref, where('follow_id', '==', user!.uid), where('follower_id', '==', uid))
    const querySnapshot = await getDocs(followsCollectionRef)
    if (querySnapshot.docs.length) {
      querySnapshot.forEach(async follow => {
        const followRef = doc(db, 'follows', follow.id)
        await deleteDoc(followRef)
      })
    } else {
      await addDoc(collection(db, 'follows'), {
        follow_id: user!.uid,
        follower_id: uid,
        created_at: new Date(),
      })
    }
  }

  const startAddDoc = async () => {
    const myRef = doc(db, 'users', user!.uid)
    const userRef = doc(db, 'users', uid)
    try {
      const docRef = await addDoc(collection(db, 'talk_rooms'), {
        talk_users: [uid, user!.uid],
        created_at: new Date(),
        update_at: new Date(),
        messages: [],
        created_user: user!.uid,
      })
      await updateDoc(docRef, {
        room_id: docRef.id,
      })
      await updateDoc(myRef, {
        talk_rooms: arrayUnion(docRef.id),
      })
      await updateDoc(userRef, {
        talk_rooms: arrayUnion(docRef.id),
      })
      dispatch(
        actions.setUserData({
          talkRooms: [...userData.talkRooms!, docRef.id],
        }),
      )
      navigate(`/talk/${docRef.id}`)
    } catch (e) {
      console.error(e)
    }
  }

  const onClickMessage = useCallback(async () => {
    const userRef = doc(db, 'users', uid)
    const userSnap = await getDoc(userRef)
    //INFO: 既存のアカウントはtalk_roomsが存在しないのでここで判断する(talk_roomsが存在しないとfilterでエラーがでるため)
    if (!userData.talkRooms || !userSnap.data()?.talk_rooms) {
      startAddDoc()
    } else {
      const result = userData.talkRooms.filter(
        (x: string) => userSnap.data()?.talk_rooms.filter((y: string) => y === x).length > 0,
      )
      if (result.length) {
        result.map((id: string) => {
          navigate(`/talk/${id}`)
        })
      } else {
        startAddDoc()
      }
    }
  }, [])

  const onClickOther = useCallback(e => {
    if (userData.uniqueId === uid) {
      dispatch(
        actionSheetActions.setActionSheetData({
          x: e.clientX,
          y: e.clientY,
          type: 'delete',
          docId: docId,
        }),
      )
    } else {
      dispatch(
        actionSheetActions.setActionSheetData({
          x: e.clientX,
          y: e.clientY,
          type: 'report',
          docId: docId,
        }),
      )
    }
    dispatch(actionSheetActions.setActionSheetOpen(true))
  }, [])

  const onClickProfileOther = useCallback(e => {
    if (userData.uniqueId === uid) {
      dispatch(
        actionSheetActions.setActionSheetData({
          x: e.clientX,
          y: e.clientY,
          type: 'myPage',
          docId: docId,
        }),
      )
    } else {
      dispatch(
        actionSheetActions.setActionSheetData({
          x: e.clientX,
          y: e.clientY,
          type: 'othersPage',
          docId: docId,
        }),
      )
    }
    dispatch(actionSheetActions.setActionSheetOpen(true))
  }, [])

  return {
    onClickActionButton,
    buttonImageSrc,
  }
}
