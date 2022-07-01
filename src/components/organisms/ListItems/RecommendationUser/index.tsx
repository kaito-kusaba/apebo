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
        <UserIcon uid={'8pVon6Up3fagkiMNWjM8Z3bz19o1'} size={46} style={styles.userIcon} />
        <UserName uid={'8pVon6Up3fagkiMNWjM8Z3bz19o1'} textStyle={styles.userName} />
      </div>
      <span className={styles.actionButton}>
        <ActionButton type="Follow" uid={'8pVon6Up3fagkiMNWjM8Z3bz19o1'} />
      </span>
    </div>
  )
})
