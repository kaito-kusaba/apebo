import UserIcon from 'components/atoms/UserIcon'
import React from 'react'

export default React.memo(function TopScreen() {
  return (
    <div>
      <UserIcon size={40} href={"/"} />
    </div>
  )
}, )
