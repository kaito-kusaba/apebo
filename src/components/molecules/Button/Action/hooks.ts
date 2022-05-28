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

type Props = {
  type: ActionButtonTypes
  onClickOther?: () => void
  onClickMessage?: () => void
  onClickLike?: () => void
  onClickFollow?: () => void
}

export function useInjection({ type, onClickOther, onClickMessage, onClickFollow, onClickLike }: Props) {
  const [buttonImageSrc, setButtonImageSrc] = useState<string>('')
  const [isSelectedMessage, setIsSelectedMessage] = useState<boolean>(false)
  const [isSelectedLike, setIsSelectedLike] = useState<boolean>(false)
  const [isSelectedFollow, setIsSelectedFollow] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

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

  const onClickActionButton = useCallback(() => {
    switch (type) {
      case 'Message':
        setIsSelectedMessage(!isSelectedMessage)
        onClickMessage!()
        break
      case 'Like':
        setIsSelectedLike(!isSelectedLike)
        onClickLike!()
        break
      case 'Follow':
        setIsSelectedFollow(!isSelectedFollow)
        onClickFollow!()
        break
      case 'Other':
        onClickOther!()
        break
    }
  }, [isSelectedMessage, isSelectedLike, isSelectedFollow])

  const onMouseToggle = useCallback(() => {
    setIsHovered(!isHovered)
  }, [isHovered, setIsHovered])

  return {
    onClickActionButton,
    buttonImageSrc,
    onMouseToggle,
  }
}
