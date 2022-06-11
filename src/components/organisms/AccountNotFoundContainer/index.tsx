import SafeView from 'components/atoms/SafeView'
import React from 'react'
import { useStyles } from './style'

export default function AccountNotFoundContainer() {
  const styles = useStyles()
  return (
    <SafeView>
      <h1 className={styles.container}>ここにアカウントなかったときの画面</h1>
    </SafeView>
  )
}
