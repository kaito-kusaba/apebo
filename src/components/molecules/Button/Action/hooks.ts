import { useCallback, useEffect, useState } from 'react'
import LIKE_ACTIVE from 'assets/images/icons/like_active.png'
import LIKE_DEFAULT from 'assets/images/icons/like_default.png'
import LIKE_HOVER from 'assets/images/icons/like_hover.png'
import MESSAGE_ACTIVE from 'assets/images/icons/message_active.png'
import MESSAGE_DEFAULT from 'assets/images/icons/message_default.png'
import MESSAGE_HOVER from 'assets/images/icons/message_hover.png'
import FOLLOW_ACTIVE from 'assets/images/icons/follow_active.png'
import FOLLOW_DEFAULT from 'assets/images/icons/follow_default.png'
import FOLLOW_HOVER from 'assets/images/icons/follow_hover.png'
import DOTS from 'assets/images/icons/dots.png'
import { ActionButtonTypes } from 'types/ActionButtonTypes'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { arrayRemove, arrayUnion, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { actions } from 'components/redux/User'
type Props = {
  type: ActionButtonTypes
  docId?: string
  uid?: string
}

export function useInjection({ type, uid, docId }: Props) {
  const navigate = useNavigate()
  const [buttonImageSrc, setButtonImageSrc] = useState<string>('')
  const [isSelectedMessage, setIsSelectedMessage] = useState<boolean>(false)
  const [isSelectedLike, setIsSelectedLike] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    switch (type) {
      case 'Message':
        isSelectedMessage
          ? setButtonImageSrc(MESSAGE_ACTIVE)
          : isHovered
          ? setButtonImageSrc(MESSAGE_HOVER)
          : setButtonImageSrc(MESSAGE_DEFAULT)
        break
      case 'Like':
        isSelectedLike
          ? setButtonImageSrc(LIKE_ACTIVE)
          : isHovered
          ? setButtonImageSrc(LIKE_HOVER)
          : setButtonImageSrc(LIKE_DEFAULT)
        break
      case 'Follow':
        userData.follows?.includes(uid!)
          ? setButtonImageSrc(FOLLOW_ACTIVE)
          : isHovered
          ? setButtonImageSrc(FOLLOW_HOVER)
          : setButtonImageSrc(FOLLOW_DEFAULT)
        break
      case 'Other':
        setButtonImageSrc(DOTS)
        break
    }
  }, [isSelectedLike, isHovered, userData.follows])

  const onClickActionButton = useCallback(
    e => {
      switch (type) {
        case 'Message':
          setIsSelectedMessage(!isSelectedMessage)
          e.stopPropagation()
          navigate('/talk/:room_id')
          break
        case 'Like':
          setIsSelectedLike(!isSelectedLike)
          break
        case 'Follow':
          onClickFollow()
          break
        case 'Other':
          onClickOther()
          break
      }
    },
    [isSelectedLike],
  )

  const onMouseToggle = useCallback(() => {
    setIsHovered(!isHovered)
  }, [isHovered])

  const onClickFollow = useCallback(() => {
    if (user?.uid !== uid) {
      const friendUserRef = doc(db, 'users', uid!)
      const myRef = doc(db, 'users', user!.uid)
      if (!userData.follows?.includes(uid!)) {
        updateDoc(friendUserRef, {
          followers: arrayUnion(user?.uid),
        })
        updateDoc(myRef, {
          follows: arrayUnion(uid),
        })
      } else {
        dispatch(
          actions.setUserData({
            follows: userData.follows.filter(follow => user?.uid !== follow),
          }),
        )
        updateDoc(friendUserRef, {
          followers: arrayRemove(user?.uid),
        })
        updateDoc(myRef, {
          follows: arrayRemove(uid),
        })
      }
    }
  }, [userData.follows])

  const onClickOther = useCallback(async () => {
    if (user!.uid === uid) {
      await deleteDoc(doc(db, 'posts', docId!))
      if (location.pathname === '/account') {
        window.location.reload()
      }
    } else {
      //TODO: ポップアップ表示
      alert('miss')
    }
  }, [])

  return {
    onClickActionButton,
    buttonImageSrc,
    onMouseToggle,
  }
}
