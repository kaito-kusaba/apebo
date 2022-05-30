import React from 'react'
import { LinkIconGray } from 'components/atoms/Icon'
import { useStyles } from './style'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

export default React.memo(function AccountURL() {
  const styles = useStyles()
  const { userData } = useSelector(({ user }: RootState) => user)

  return (
    <div className={styles.container}>
      <img className={styles.img} src={LinkIconGray} alt="" />
      <a href={userData.website} target="_blank" rel="noopener" className={styles.url}>
        {userData.website}
      </a>
    </div>
  )
})
