import React from 'react'
import { LinkIconGray } from 'components/atoms/Icon'
import { useStyles } from './style'

export default React.memo(function AccountURL() {
  const url = 'https://google.com/google.com/google.com'
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <img className={styles.img} src={LinkIconGray} alt="" />
      <a href={url} target="_blank" rel="noopener" className={styles.url}>
        {url}
      </a>
    </div>
  )
})
