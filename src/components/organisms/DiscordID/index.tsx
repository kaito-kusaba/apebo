import React from 'react'
import { useStyles } from './style'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { DiscordIconGray } from 'components/atoms/Icon'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

export default React.memo(function DiscordID() {
  const styles = useStyles()
  const { userData } = useSelector(({ user }: RootState) => user)
  return (
    <div className={styles.discordIdCopy}>
      <CopyToClipboard text={userData.discordId!} onCopy={() => alert('IDをコピーしました')}>
        <div className={styles.discordIdContainer}>
          <img src={DiscordIconGray} alt="" className={styles.discordIcon} />
          <div className={styles.discordId}>{userData.discordId}</div>
        </div>
      </CopyToClipboard>
    </div>
  )
})
