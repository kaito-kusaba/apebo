import React from 'react'
import { useStyles } from './style'
import DISCORD_ICON from 'assets/images/icons/discord_icon.png'

interface Props {
  discordId: string
}

export default React.memo(function DiscordID({ discordId }: Props) {
  const styles = useStyles()
  return (
    <div className={styles.discordIdContainer}>
      <img src={DISCORD_ICON} alt="" className={styles.discordIcon} />
      <div className={styles.discordId}>{discordId}</div>
    </div>
  )
})
