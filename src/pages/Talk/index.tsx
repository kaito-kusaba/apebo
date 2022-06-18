import SafeView from 'components/atoms/SafeView'
import TalkPageContainer from 'components/organisms/ListItems/TalkPageContainer'
import TalkContainer from 'components/organisms/TalkContainer'
import TalkRoomsContainer from 'components/organisms/TalkRoomsContainer'

export default function TalkScreen() {
  return (
    <SafeView>
      <TalkPageContainer left={<TalkRoomsContainer />} right={<TalkContainer />} />
    </SafeView>
  )
}
