import React from 'react'
import { useStyles } from './style'
import { useInjection } from './hooks'
import { FollowingIconGray, StarIconSquant, WorldIconYellow } from 'components/atoms/Icon'

export default React.memo(function TimeLineTab() {
  const styles = useStyles()
  const { onClick } = useInjection()

  return (
    <div className={styles.tab}>
      <button onClick={() => onClick('All')} className={styles.button('All')}>
        <img src={WorldIconYellow} className={styles.allImg} alt="" />
        <span className={styles.text}>全体</span>
      </button>
      <button onClick={() => onClick('Following')} className={styles.button('Following')}>
        <img src={FollowingIconGray} className={styles.followImg} alt="" />
        <span className={styles.text}>フォロー中</span>
      </button>
      <button onClick={() => onClick('Star')} className={styles.button('Star')}>
        <img src={StarIconSquant} className={styles.starImg} alt="" />
        <span className={styles.text}>スター</span>
      </button>
    </div>
  )
})
