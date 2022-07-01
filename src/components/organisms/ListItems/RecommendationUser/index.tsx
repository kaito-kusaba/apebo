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
        <UserIcon uid={'InHeBfXrJuSNWtHRZtKJSlY0FTb2'} size={46} style={styles.userIcon} />
        <UserName uid={'InHeBfXrJuSNWtHRZtKJSlY0FTb2'} textStyle={styles.userName} pointer />
      </div>
      <span className={styles.actionButton}>
        <ActionButton type="Follow" uid={'InHeBfXrJuSNWtHRZtKJSlY0FTb2'} />
      </span>
    </div>
  )
})
