import React from 'react'
import { useStyles } from './style'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { DiscordIconGray } from 'components/atoms/Icon'

export default React.memo(function DiscordID() {
  const styles = useStyles()
  return (
    <div className={styles.discordIdCopy}>
      <CopyToClipboard text="ringosi#2222" onCopy={() => alert('IDをコピーしました')}>
        <div className={styles.discordIdContainer}>
          <img src={DiscordIconGray} alt="" className={styles.discordIcon} />
          <div className={styles.discordId}>ringosi#2222</div>
        </div>
      </CopyToClipboard>
    </div>
  )
})
