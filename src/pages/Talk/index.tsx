import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import TalkPageContainer from 'components/organisms/ListItems/TalkPageContainer'
import ProfileContainer from 'components/organisms/ProfileContainer'
import TalkContainer from 'components/organisms/Containers/TalkContainer'
import { useStyles } from './style'

export default function TalkScreen() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <SafeView>
        <ScreenLabel label={'〇〇さんとのトークルーム'} />
        <TalkPageContainer left={<ProfileContainer />} right={<TalkContainer />} />
      </SafeView>
    </div>
  )
}
