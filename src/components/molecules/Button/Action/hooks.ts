import { useCallback, useEffect, useState } from 'react'
import LIKE_ACTIVE from 'assets/images/icons/like_active.png'
import LIKE_DEFAULT from 'assets/images/icons/like_default.png'
import LIKE_HOVER from 'assets/images/icons/like_hover.png'
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
  const [isSelectedLike, setIsSelectedLike] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { user, userData } = useSelector(({ user }: RootState) => user)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (uid) {
      switch (type) {
        case 'Message':
          isHovered ? setButtonImageSrc(MESSAGE_HOVER) : setButtonImageSrc(MESSAGE_DEFAULT)
          break
        case 'Like':
          isSelectedLike
            ? setButtonImageSrc(LIKE_ACTIVE)
            : isHovered
            ? setButtonImageSrc(LIKE_HOVER)
            : setButtonImageSrc(LIKE_DEFAULT)
          break
        case 'Follow':
          userData.follows?.includes(uid)
            ? setButtonImageSrc(FOLLOW_ACTIVE)
            : isHovered
            ? setButtonImageSrc(FOLLOW_HOVER)
            : setButtonImageSrc(FOLLOW_DEFAULT)
          break
        case 'Other':
          setButtonImageSrc(DOTS)
          break
      }
    }
  }, [isSelectedLike, isHovered])

  const onClickActionButton = useCallback(
    e => {
      switch (type) {
        case 'Message':
          e.stopPropagation()
          onClickMessage()
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

  const onClickMessage = useCallback(() => {}, [])

  const onClickFollow = () => {
    const follows = userData.follows || []
    if (user && uid && user.uid !== uid) {
      const friendUserRef = doc(db, 'users', uid)
      const myRef = doc(db, 'users', user.uid)

      if (!follows.includes(uid)) {
        //フォローする
        follows?.push(uid)
        console.log('pushed:' + follows)
        dispatch(
          actions.setUserData({
            follows: follows,
          }),
        )
        updateDoc(myRef, {
          follows: arrayUnion(uid),
        })
        updateDoc(friendUserRef, {
          followers: arrayUnion(user.uid),
        })
      } else {
        //フォローを外す
        const _follows = follows.filter(function (partner_uid) {
          return partner_uid !== uid
        })
        console.log('after removed:' + _follows)
        dispatch(
          actions.setUserData({
            follows: _follows,
          }),
        )
        updateDoc(myRef, {
          follows: arrayRemove(uid),
        })
        updateDoc(friendUserRef, {
          followers: arrayRemove(user.uid),
        })
      }
    }
  }

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
