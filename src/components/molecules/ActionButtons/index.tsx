import { RootState } from 'components/redux'
import { useSelector } from 'react-redux'
import { useStyles } from './style'
import ActionButton from 'components/molecules/Button/Action'

type Props = {
  uid: string
}

export default function ActionButtons({ uid }: Props) {
  const styles = useStyles()
  const { user } = useSelector(({ user }: RootState) => user)

  if (uid === user!.uid) {
    return (
      <div className={styles.container}>
        <ActionButton type="ProfileOther" buttonStyle={styles.otherButton} imgStyle={styles.img} uid={uid} />
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <ActionButton type="ProfileMessage" imgStyle={styles.img} buttonStyle={styles.messageButton} uid={uid} />
        <ActionButton type="ProfileOther" buttonStyle={styles.otherButton} imgStyle={styles.img} uid={uid} />
      </div>
    )
  }
}
