import React from 'react'
import { useStyles } from './style'
import DISCORD_ICON from 'assets/images/icons/discord_icon.png'

export default React.memo(function DiscordID() {
  const styles = useStyles()
  return (
    <div className={styles.discordIdContainer}>
      <img src={DISCORD_ICON} alt="" className={styles.discordIcon} />
      <div className={styles.discordId}>ringosi#2222</div>
    </div>
  )
})
