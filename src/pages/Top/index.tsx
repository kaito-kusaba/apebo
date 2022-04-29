import UserIcon from 'components/atoms/UserIcon'
import NavigationButton from 'components/organisms/Button/Navigation'
import React from 'react'

export default React.memo(function TopScreen() {
  return (
    <div>
      <UserIcon size={46} href={'/'} />
      <NavigationButton type="Home" />
    </div>
  )
})
