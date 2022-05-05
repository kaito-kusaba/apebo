import React, { useCallback, useEffect, useState } from 'react'
import type { NavigationButtonTypes } from 'types/NavigationButtonTypes'
import { useStyles } from './style'
import { useLocation, useNavigate } from 'react-router-dom'

import HOME_ACTIVE from 'assets/images/icons/navigation/home_active.png'
import HOME_DEFAULT from 'assets/images/icons/navigation/home_default.png'
import HOME_HOVER from 'assets/images/icons/navigation/home_hover.png'
import ACCOUNT_ACTIVE from 'assets/images/icons/navigation/account_active.png'
import ACCOUNT_DEFAULT from 'assets/images/icons/navigation/account_default.png'
import ACCOUNT_HOVER from 'assets/images/icons/navigation/account_hover.png'
import POST_ACTIVE from 'assets/images/icons/navigation/post_active.png'
import POST_DEFAULT from 'assets/images/icons/navigation/post_default.png'
import POST_HOVER from 'assets/images/icons/navigation/post_hover.png'
import { useDispatch } from 'react-redux'
import { actions } from 'components/redux/Modal'

interface Props {
  type: NavigationButtonTypes
}

export default React.memo(function NavigationButton({ type }: Props) {
  const [isSelected, setIsSelected] = useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [buttonImageSrc, setButtonImageSrc] = useState<string>('')
  const [path, setPath] = useState<string>('')
  const styles = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setIsSelected(0)
        break
      case '/account':
        setIsSelected(1)
        break
      case '/post':
        setIsSelected(2)
        break
      default:
        setIsSelected(-1)
        break
    }
  }, [location.pathname])

  useEffect(() => {
    switch (type) {
      case 'Home':
        isSelected === 0
          ? setButtonImageSrc(HOME_ACTIVE)
          : isHovered
          ? setButtonImageSrc(HOME_HOVER)
          : setButtonImageSrc(HOME_DEFAULT)
        break
      case 'Account':
        isSelected === 1
          ? setButtonImageSrc(ACCOUNT_ACTIVE)
          : isHovered
          ? setButtonImageSrc(ACCOUNT_HOVER)
          : setButtonImageSrc(ACCOUNT_DEFAULT)
        break
      case 'Post':
        isSelected === 2
          ? setButtonImageSrc(POST_ACTIVE)
          : isHovered
          ? setButtonImageSrc(POST_HOVER)
          : setButtonImageSrc(POST_DEFAULT)
        break
    }
  }, [isSelected, isHovered])

  useEffect(() => {
    if (type.toLowerCase() === 'home') {
      setPath('/')
    } else {
      setPath(`/${type.toLowerCase()}`)
    }
  }, [path])

  const onClickNavigationButton = useCallback(() => {
    if (type === 'Post') {
      dispatch(actions.setModal(true))
    }
    navigate(path)
  }, [path])

  const onMouseToggle = useCallback(() => {
    setIsHovered(!isHovered)
  }, [isHovered, setIsHovered])

  return (
    <button
      onMouseEnter={onMouseToggle}
      onMouseLeave={onMouseToggle}
      onClick={onClickNavigationButton}
      className={`${styles.navigationButton} navigation-buttons navigation-buttons-${type.toLowerCase()}`}>
      <img src={buttonImageSrc} className={styles.navigationButtonImageStyles} alt="" />
    </button>
  )
})
