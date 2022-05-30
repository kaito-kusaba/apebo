import {
  FollowingIconGray,
  FollowingIconSquant,
  FollowingIconYellow,
  StarIconGray,
  StarIconSquant,
  StarIconYellow,
  WorldIconGray,
  WorldIconSquant,
  WorldIconYellow,
} from 'components/atoms/Icon'
import { RootState } from 'components/redux'
import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { TabButtonTypes } from 'types/TabButtonTypes'
import { actions } from 'components/redux/TimeLineTab'

type Props = {
  type: TabButtonTypes
}

function useMapState() {
  const { selected } = useSelector(({ tab }: RootState) => tab)
  return {
    selected,
  }
}

export function useInjection({ type }: Props) {
  const dispatch = useDispatch()
  const { selected } = useMapState()
  const [img, setImg] = useState<string>('')
  const [isHovered, setIsHovered] = useState<boolean>(false)

  useEffect(() => {
    switch (type) {
      case 'All':
        selected === 'All' ? setImg(WorldIconYellow) : isHovered ? setImg(WorldIconGray) : setImg(WorldIconSquant)
        break
      case 'Following':
        selected === 'Following'
          ? setImg(FollowingIconYellow)
          : isHovered
          ? setImg(FollowingIconGray)
          : setImg(FollowingIconSquant)
        break
      case 'Star':
        selected === 'Star' ? setImg(StarIconYellow) : isHovered ? setImg(StarIconGray) : setImg(StarIconSquant)
        break
    }
  })

  const onMouseToggle = useCallback(() => {
    setIsHovered(!isHovered)
  }, [isHovered])

  const onClick = useCallback(() => {
    dispatch(actions.setSelected(type))
  }, [])

  return {
    img,
    onMouseToggle,
    onClick,
    selected,
    isHovered,
  }
}
