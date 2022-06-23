import { useCallback, useEffect, useState } from 'react'
import { ActionButtonTypes } from 'types/ActionButtonTypes'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useNavigate, useParams } from 'react-router-dom'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { actions } from 'components/redux/User'
import { actions as modalActions } from 'components/redux/Modal'
import { actions as actionSheetActions } from 'components/redux/ActionSheet'
import {
  DotsIconGray,
  FOLLOW_ACTIVE,
  FOLLOW_DEFAULT,
  FOLLOW_HOVER,
  LIKE_ACTIVE,
  LIKE_DEFAULT,
  LIKE_HOVER,
  MessageIconGray,
  MESSAGE_ACTIVE,
  MESSAGE_DEFAULT,
  MESSAGE_HOVER,
} from 'components/atoms/Icon'

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
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    if (uid) {
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
          userData.follows?.includes(uid)
            ? setButtonImageSrc(FOLLOW_ACTIVE)
            : isHovered
            ? setButtonImageSrc(FOLLOW_HOVER)
            : setButtonImageSrc(FOLLOW_DEFAULT)
          break
        case 'Other':
          setButtonImageSrc(DotsIconGray)
          break
        case 'ProfileOther':
          setButtonImageSrc(DotsIconGray)
          break
      }
    } else {
      switch (type) {
        case 'ProfileMessage':
          setButtonImageSrc(MessageIconGray)
          break
      }
    }
  }, [isSelectedLike, isHovered])

  const onClickActionButton = useCallback(
    e => {
      switch (type) {
        case 'Message':
          e.stopPropagation()
          if (user?.uid) {
            setIsSelectedMessage(!isSelectedMessage)
            navigate('/talk/:room_id')
          } else {
            dispatch(modalActions.setSignInModal(true))
          }
          break
        case 'Like':
          e.stopPropagation()
          setIsSelectedLike(!isSelectedLike)
          break
        case 'Follow':
          e.stopPropagation()
          onClickFollow()
          break
        case 'Other':
          e.stopPropagation()
          onClickOther(e)
          break
        case 'ProfileMessage':
          e.stopPropagation()
          setIsSelectedMessage(!isSelectedMessage)
          navigate('/talk/:room_id')
          break
        case 'ProfileOther':
          onClickProfileOther(e)
          break
      }
    },
    [isSelectedLike],
  )

  const onMouseToggle = useCallback(() => {
    setIsHovered(!isHovered)
  }, [isHovered])

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
    if (userData.uniqueId === params.uid) {
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
    onMouseToggle,
  }
}
