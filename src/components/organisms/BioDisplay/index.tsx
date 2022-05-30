import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'

export default React.memo(function BioDisplay() {
  const styles = useStyles()
  const { userData } = useSelector(({ user }: RootState) => user)
  return <div className={styles.bioDisplay}>{userData.bio}</div>
})
