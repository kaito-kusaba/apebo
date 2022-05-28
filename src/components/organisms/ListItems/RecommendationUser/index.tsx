import React from 'react'
import { useStyles } from './style'
import UserIcon from 'components/atoms/UserIcon'
import UserName from 'components/atoms/UserName'
import ActionButton from 'components/molecules/Button/Action'

export default React.memo(function RecommendationUser() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserIcon uid={'iOq1QZovRKSty3QIWbbes45njdP2'} size={46} style={styles.userIcon} />
        <UserName uid={'iOq1QZovRKSty3QIWbbes45njdP2'} textStyle={styles.userName} />
      </div>
      <span className={styles.actionButton}>
        <ActionButton type="Follow" imgStyle={styles.img} />
      </span>
    </div>
  )
})
