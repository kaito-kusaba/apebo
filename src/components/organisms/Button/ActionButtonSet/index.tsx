import React from 'react'
import ActionButton from 'components/molecules/Button/Action'
import { useStyles } from './style'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

type Props = {
  docId: string
  uid: string
  onClickLike?: (e: any) => void
  onClickMessage?: (e: any) => void
  onClickFollow?: (e: any) => void
  onClickOther: (e: any) => void
}

export default React.memo(function ActionButtonSet({
  docId,
  uid,
  onClickLike,
  onClickFollow,
  onClickOther,
  onClickMessage,
}: Props) {
  const styles = useStyles()
  const { user } = useSelector(({ user }: RootState) => user)

  if (user?.uid === uid) {
    return (
      <div className={styles.actionButtonsContainer}>
        <ActionButton type="Like" docId={docId} uid={uid} onClickLike={onClickLike} />
        <ActionButton type="Other" docId={docId} uid={uid} onClickOther={onClickOther} />
      </div>
    )
  } else {
    return (
      <div className={styles.actionButtonsContainer}>
        <ActionButton type="Message" docId={docId} uid={uid} onClickMessage={onClickMessage} />
        <ActionButton type="Like" docId={docId} uid={uid} onClickLike={onClickLike} />
        <ActionButton type="Follow" docId={docId} uid={uid} onClickFollow={onClickFollow} />
        <ActionButton type="Other" docId={docId} uid={uid} onClickOther={onClickOther} />
      </div>
    )
  }
})
