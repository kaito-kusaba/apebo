import React from 'react'
import { useStyles } from './style'
import DISCORD_ICON from 'assets/images/icons/discord_icon.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default React.memo(function DiscordID() {
  const styles = useStyles()
  return (
    <CopyToClipboard text="ringosi#2222" onCopy={() => alert('IDをコピーしました')}>
      <div className={styles.discordIdContainer}>
        <img src={DISCORD_ICON} alt="" className={styles.discordIcon} />
        <div className={styles.discordId}>ringosi#2222</div>
      </div>
    </CopyToClipboard>
  )
})
