import React, { useEffect, useState } from 'react'
import ActionButton from 'components/molecules/Button/Action'
import { useStyles } from './style'
import { User } from 'types/User'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

export default React.memo(function ActionButtonSet() {
  const styles = useStyles()
  const { user } = useSelector(({ user }: RootState) => user)
  const [postUser, setPostUser] = useState<User | string>('')

  useEffect(() => {
    setPostUser('')
  }, [])

  if (user === postUser) {
    return (
      <div className={styles.actionButtonsContainer}>
        <ActionButton type="Like" />
      </div>
    )
  } else {
    return (
      <div className={styles.actionButtonsContainer}>
        <ActionButton type="Message" />
        <ActionButton type="Like" />
        <ActionButton type="Follow" />
        <ActionButton type="Other" />
      </div>
    )
  }
})
