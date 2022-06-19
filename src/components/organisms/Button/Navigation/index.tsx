import React, { useCallback, useEffect, useState } from 'react'
import type { NavigationButtonTypes } from 'types/NavigationButtonTypes'
import { useStyles } from './style'
import { useLocation, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'components/redux/Modal'
import { RootState } from 'components/redux'
import {
  ACCOUNT_ACTIVE,
  ACCOUNT_DEFAULT,
  ACCOUNT_HOVER,
  HOME_ACTIVE,
  HOME_DEFAULT,
  HOME_HOVER,
  POST_DEFAULT,
  POST_HOVER,
  SETTINGS_ACTIVE,
  SETTINGS_DEFAULT,
  SETTINGS_HOVER,
} from 'components/atoms/Icon'

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
      case `/account/${user!.uid}`:
        setIsSelected('Account')
        break
      case '/account/settings':
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
    switch (type) {
      case 'Home':
        setPath('/')
        break
      case 'Account':
        setPath(`/account/${user!.uid}`)
        break
      case 'Settings':
        setPath(`/account/settings/profile`)
        break
      default:
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
