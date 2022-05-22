import React from 'react'
import { useStyles } from './style'
import TabButton from './TabButton'

export default React.memo(function TimeLineTab() {
  const styles = useStyles()

  return (
    <div className={styles.tabContainer}>
      <TabButton type="All" label="全体" isChecked={true} />
      <TabButton type="Following" label="フォロー中" isChecked={true} />
      <TabButton type="Star" label="スター" isChecked={true} />
    </div>
  )
})
