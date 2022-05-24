import React, { useEffect, useState } from 'react'
import ActionButton from 'components/molecules/Button/Action'
import { useStyles } from './style'
import { User } from 'types/User'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

type Props = {
  docId: string
}

export default React.memo(function ActionButtonSet({ docId }: Props) {
  const styles = useStyles()
  const { user } = useSelector(({ user }: RootState) => user)
  const [postUser, setPostUser] = useState<User | string>('')

  useEffect(() => {
    setPostUser('')
  }, [])

  if (user === postUser) {
    return (
      <div className={styles.actionButtonsContainer}>
        <ActionButton type="Like" docId={docId} />
      </div>
    )
  } else {
    return (
      <div className={styles.actionButtonsContainer}>
        <ActionButton type="Message" docId={docId} />
        <ActionButton type="Like" docId={docId} />
        <ActionButton type="Follow" docId={docId} />
        <ActionButton type="Other" docId={docId} />
      </div>
    )
  }
})
