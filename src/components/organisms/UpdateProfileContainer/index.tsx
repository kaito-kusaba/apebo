import SettingsLabel from 'components/molecules/Label/SettingsLabel'
import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

export default React.memo(function UpdateProfileScreen() {
  const { newName, onChange, onSubmit } = useInjection()
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <SettingsLabel label="プロフィール" />
      <p className={styles.label}>ユーザーネーム</p>
      <input type="text" value={newName} onChange={onChange} />
      <input type="submit" value={'変更する'} onClick={onSubmit} />
    </div>
  )
})
