import { RootState } from 'components/redux'
import { actions } from 'components/redux/Alert'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from './style'

type Props = {
  text: string
  success: boolean
}

export default function Alert({ text, success }: Props) {
  const styles = useStyles({ success })
  const dispatch = useDispatch()
  const { isOpen } = useSelector(({ alert }: RootState) => alert)

  useEffect(() => {
    if (isOpen) {
      setInterval(() => {
        dispatch(actions.setAlert(false))
      }, 7000)
    }
  }, [])

  return (
    <div className={styles.container()}>
      <span className={styles.text}>{text}</span>
    </div>
  )
}
