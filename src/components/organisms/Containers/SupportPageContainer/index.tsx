import SettingsLabel from 'components/molecules/Label/SettingsLabel'
import React from 'react'
import { useStyles } from './style'

export default React.memo(function SupportPageContainer() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <SettingsLabel label="お問い合わせ" />
    </div>
  )
})
