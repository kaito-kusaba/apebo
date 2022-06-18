import React, { useEffect, useState } from 'react'
import { useStyles } from './style'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { DiscordIconGray } from 'components/atoms/Icon'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'
import { useLocation, useParams } from 'react-router-dom'
import { useAlert } from 'components/molecules/Alert'

export default React.memo(function DiscordID() {
  const styles = useStyles()
  const { userData } = useSelector(({ user }: RootState) => user)
  const [discordId, setDiscordId] = useState<string | undefined>(userData.discordId)
  const params = useParams()
  const location = useLocation()
  const showAlert = useAlert()

  const fetchUserData = async () => {
    if (!(params.uid === userData.uniqueId)) {
      const userRef = doc(db, 'users', params.uid!)
      const userSnap = await getDoc(userRef)
      setDiscordId(userSnap.data()?.discord_id)
    } else {
      setDiscordId(userData.discordId)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [location.pathname])

  const DiscordImg: React.VFC = () => {
    return <img src={DiscordIconGray} alt="" className={styles.discordIcon} />
  }

  if (discordId) {
    return (
      <div className={styles.discordIdCopy}>
        <CopyToClipboard text={discordId} onCopy={() => showAlert({ text: 'IDをコピーしました' })}>
          <div className={styles.discordIdContainer}>
            <DiscordImg />
            <div className={styles.discordId}>{discordId}</div>
          </div>
        </CopyToClipboard>
      </div>
    )
  } else {
    return <></>
  }
})
