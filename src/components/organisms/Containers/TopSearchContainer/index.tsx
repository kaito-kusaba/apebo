import React, { useCallback, useState } from 'react'
import Check from 'components/molecules/Button/Check'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import { useStyles } from './style'

export default React.memo(function TopSearchContainer() {
  const [checked, setChecked] = useState(false)
  const styles = useStyles()

  const onClick = useCallback(() => {
    setChecked(!checked)
  }, [checked])

  return (
    <div className={styles.container}>
      <ScreenLabel label="検索" noAvailableUid />
      <Check label="PC" onClick={onClick} checked={checked} />
    </div>
  )
})
