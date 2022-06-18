import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import React from 'react'
import TalkRoomsList from 'components/organisms/ListItems/TalkRoomsList'
import { useStyles } from './style'

export default function TalkRoomsContainer() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <ScreenLabel label="トークルーム" />
      <TalkRoomsList />
    </div>
  )
}
