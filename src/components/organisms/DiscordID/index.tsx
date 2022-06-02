import React, { useEffect, useState } from 'react'
import { useStyles } from './style'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { DiscordIconGray } from 'components/atoms/Icon'
import { useParams } from 'react-router-dom'
import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

export default React.memo(function DiscordID() {
  const styles = useStyles()
  const params = useParams()
  const [data, setData] = useState<DocumentData>()
  const { userData } = useSelector(({ user }: RootState) => user)

  const fetchUserData = async () => {
    if (params.uid) {
      const userRef = doc(db, 'users', params.uid)
      const userSnap = await getDoc(userRef)
      setData(userSnap.data())
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className={styles.discordIdCopy}>
      <CopyToClipboard
        text={params.uid ? data?.discord_id : userData.discordId}
        onCopy={() => alert('IDをコピーしました')}>
        <div className={styles.discordIdContainer}>
          <img src={DiscordIconGray} alt="" className={styles.discordIcon} />
          <div className={styles.discordId}>{params.uid ? data?.discord_id : userData.discordId}</div>
        </div>
      </CopyToClipboard>
    </div>
  )
})
