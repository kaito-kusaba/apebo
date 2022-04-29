import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { NavigationButtonTypes } from 'types/NavigationButtonTypes'
import HOME_ACTIVE from 'assets/images/icons/navigation/home_active.png'
import HOME_DEFAULT from 'assets/images/icons/navigation/home_default.png'
import SETTINGS_ACTIVE from 'assets/images/icons/navigation/settings_active.png'
import SETTINGS_DEFAULT from 'assets/images/icons/navigation/settings_default.png'
import ACCOUNT_ACTIVE from 'assets/images/icons/navigation/account_active.png'
import ACCOUNT_DEFAULT from 'assets/images/icons/navigation/account_default.png'
import POST_DEFAULT from 'assets/images/icons/navigation/post_default.png'
import { useStyles } from './style'

interface Props {
  type: NavigationButtonTypes
}

export default React.memo(function NavigationButton({ type }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [buttonImageSrc, setButtonImageSrc] = useState<string>('')
  const navigate = useNavigate()
  const styles = useStyles()
  useEffect(() => {
    switch (type) {
      case 'Home':
        isSelected ? setButtonImageSrc(HOME_ACTIVE) : setButtonImageSrc(HOME_DEFAULT)
        navigate('/')
        break
      case 'Settings':
        isSelected ? setButtonImageSrc(SETTINGS_ACTIVE) : setButtonImageSrc(SETTINGS_DEFAULT)
        navigate('/account/settings')
        break
      case 'Account':
        isSelected ? setButtonImageSrc(ACCOUNT_ACTIVE) : setButtonImageSrc(ACCOUNT_DEFAULT)
        navigate('/account')
        break
      case 'Post':
        setButtonImageSrc(POST_DEFAULT)
        navigate('/post')
        break
    }
  }, [isSelected])

  const onClickNavigationButton = useCallback(() => {
    setIsSelected(!isSelected)
  }, [isSelected])

  return (
    <button
      onClick={onClickNavigationButton}
      className={`${styles.navigationButton} navigation-buttons navigation-buttons-${type.toLowerCase()}`}>
      <img src={buttonImageSrc} className={styles.navigationButtonImageStyles} alt="" />
    </button>
  )
})
