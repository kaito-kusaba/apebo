import SafeView from 'components/atoms/SafeView'
import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'

export default React.memo(function UpdateProfileScreen() {
  const { newName, onChange, onSubmit } = useInjection()
  const styles = useStyles()
  return (
    <SafeView>
      <p className={styles.label}>ユーザーネーム</p>
      <input type="text" value={newName} onChange={onChange} />
      <input type="submit" value={'変更する'} onClick={onSubmit} />
    </SafeView>
  )
})
