import React from 'react'
import DIVIDER from 'assets/images/icons/navigation/Divider.png'
import { useStyles } from './style'

export default React.memo(function Divider() {
  const styles = useStyles()
  return <img src={DIVIDER} alt="" className={styles.dividerStyle} />
})
