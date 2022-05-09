import { actions } from 'components/redux/TimeLineTab'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useStyles } from './style'

export default React.memo(function TimeLineSelect() {
  const styles = useStyles()
  const dispatch = useDispatch()

  const onChange = useCallback((e: any) => {
    dispatch(actions.setChecked(e.target.value))
  }, [])

  return (
    <form>
      <div>
        <input
          className={styles.container}
          defaultChecked
          type="radio"
          name="tab"
          id="all"
          value="All"
          onChange={onChange}
        />
        <label htmlFor="all">全体</label>
      </div>
      <div>
        <input
          className={styles.container}
          type="radio"
          name="tab"
          id="following"
          value="Following"
          onChange={onChange}
        />
        <label htmlFor="following">フォロー中</label>
      </div>
      <div>
        <input className={styles.container} type="radio" name="tab" id="star" value="Star" onChange={onChange} />
        <label htmlFor="star">スター</label>
      </div>
    </form>
  )
})
