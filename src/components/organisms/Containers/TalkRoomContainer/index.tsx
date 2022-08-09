import React from 'react'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import { useInjection } from './hooks'
import { useStyles } from './style'
import TalkRoomContentList from 'components/organisms/ListItems/TalkRoomContentList'

export default function TalkRoomContainer() {
  const { talkRooms } = useInjection()
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <ScreenLabel label="トークルーム" width={340} />
      </div>
      <div className={styles.talkRoomList}>
        <TalkRoomContentList data={talkRooms} />
      </div>
    </div>
  )
}
