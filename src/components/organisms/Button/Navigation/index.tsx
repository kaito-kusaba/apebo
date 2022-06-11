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
import POST_DEFAULT from 'assets/images/icons/navigation/post_default.png'
import POST_HOVER from 'assets/images/icons/navigation/post_hover.png'
import SETTINGS_ACTIVE from 'assets/images/icons/navigation/settings_active.png'
import SETTINGS_HOVER from 'assets/images/icons/navigation/settings_hover.png'
import SETTINGS_DEFAULT from 'assets/images/icons/navigation/settings_default.png'

import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'components/redux/Modal'
import { RootState } from 'components/redux'

type Props = {
  type: NavigationButtonTypes
  style?: string
}

export default React.memo(function NavigationButton({ type, style }: Props) {
  const [isSelected, setIsSelected] = useState<NavigationButtonTypes>('Home')
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [buttonImageSrc, setButtonImageSrc] = useState<string>('')
  const [path, setPath] = useState<string>('')
  const styles = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { user } = useSelector(({ user }: RootState) => user)

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setIsSelected('Home')
        break
      case '/account':
        setIsSelected('Account')
        break
      case '/settings':
        setIsSelected('Settings')
        break
      default:
        setIsSelected('None')
        break
    }
  }, [location.pathname])

  useEffect(() => {
    switch (type) {
      case 'Home':
        isSelected === 'Home'
          ? setButtonImageSrc(HOME_ACTIVE)
          : isHovered
          ? setButtonImageSrc(HOME_HOVER)
          : setButtonImageSrc(HOME_DEFAULT)
        break
      case 'Account':
        isSelected === 'Account'
          ? setButtonImageSrc(ACCOUNT_ACTIVE)
          : isHovered
          ? setButtonImageSrc(ACCOUNT_HOVER)
          : setButtonImageSrc(ACCOUNT_DEFAULT)
        break
      case 'Post':
        isHovered ? setButtonImageSrc(POST_HOVER) : setButtonImageSrc(POST_DEFAULT)
        break
      case 'Settings':
        isSelected === 'Settings'
          ? setButtonImageSrc(SETTINGS_ACTIVE)
          : isHovered
          ? setButtonImageSrc(SETTINGS_HOVER)
          : setButtonImageSrc(SETTINGS_DEFAULT)
        break
    }
  }, [isSelected, isHovered])

  useEffect(() => {
    if (type === 'Home') {
      setPath('/')
    } else {
      setPath(`/${type.toLowerCase()}`)
    }
  }, [path])

  const onClickNavigationButton = useCallback(() => {
    if (type === 'Post') {
      dispatch(actions.setModal(true))
    } else {
      navigate(path)
    }
  }, [path])

  const onMouseToggle = useCallback(() => {
    setIsHovered(!isHovered)
  }, [isHovered, setIsHovered])

  useEffect(() => {
    if (location.pathname === '/account/' + user!.uid) {
      setIsSelected('Account')
    }
  }, [location])

  return (
    <button
      onMouseEnter={onMouseToggle}
      onMouseLeave={onMouseToggle}
      onClick={onClickNavigationButton}
      className={`${styles.navigationButton} ${style} navigation-buttons-${type.toLowerCase()}`}>
      <img src={buttonImageSrc} className={styles.navigationButtonImageStyles} alt="" />
    </button>
  )
})
