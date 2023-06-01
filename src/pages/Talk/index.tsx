import SafeView from 'components/atoms/SafeView'
import TalkPageContainer from 'components/organisms/Containers/TalkPageContainer'
import TalkContainer from 'components/organisms/Containers/TalkContainer'
import React from 'react'
import TalkRoomContainer from 'components/organisms/Containers/TalkRoomContainer'
import { useParams } from 'react-router-dom'

export default function TalkScreen() {
  const params = useParams()

  if (params.room_id) {
    return (
      <SafeView>
        <TalkPageContainer left={<TalkRoomContainer />} right={<TalkContainer />} />
      </SafeView>
    )
  } else {
    return (
      <SafeView>
        <TalkPageContainer left={<TalkRoomContainer />} right={<></>} />
      </SafeView>
    )
  }
}
