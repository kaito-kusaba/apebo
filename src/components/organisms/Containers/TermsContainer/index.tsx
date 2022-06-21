import SettingsLabel from 'components/molecules/Label/SettingsLabel'
import React from 'react'
import { useStyles } from './style'

export default React.memo(function TermsContainer() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <SettingsLabel label="利用規約" />
    </div>
  )
})
