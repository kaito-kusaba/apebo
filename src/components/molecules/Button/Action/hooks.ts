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
import { useEffect, useState, useCallback } from 'react'
import { ActionButtonTypes } from 'types/ActionButtonTypes'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from 'libs/firebase'

interface Props {
  type: ActionButtonTypes
  docId: string
}

export function useInjection({ type, docId }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isSelectedMessage, setIsSelectedMessage] = useState<boolean>(false)
  const [isSelectedLike, setIsSelectedLike] = useState<boolean>(false)
  const [isSelectedFollow, setIsSelectedFollow] = useState<boolean>(false)
  const [buttonImageSrc, setButtonImageSrc] = useState<string>('')

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
        isSelectedFollow
          ? setButtonImageSrc(FOLLOW_ACTIVE)
          : isHovered
          ? setButtonImageSrc(FOLLOW_HOVER)
          : setButtonImageSrc(FOLLOW_DEFAULT)
        break
      case 'Other':
        setButtonImageSrc(DOTS)
        break
    }
  }, [isSelectedMessage, isSelectedLike, isSelectedFollow, isHovered, type])

  const onMouseToggle = useCallback(() => {
    setIsHovered(!isHovered)
  }, [isHovered, setIsHovered])

  const onClickOther = useCallback(async docId => {
    await deleteDoc(doc(db, 'posts', docId))
  }, [])

  const onClickActionButton = useCallback(() => {
    switch (type) {
      case 'Message':
        setIsSelectedMessage(!isSelectedMessage)
        break
      case 'Like':
        setIsSelectedLike(!isSelectedLike)
        break
      case 'Follow':
        setIsSelectedFollow(!isSelectedFollow)
        break
      case 'Other':
        onClickOther(docId)
        break
    }
  }, [isSelectedMessage, isSelectedLike, isSelectedFollow])

  return {
    buttonImageSrc,
    onMouseToggle,
    onClickActionButton,
  }
}
