import { CancelIconRed, CheckIconGreen } from 'components/atoms/Icon'
import React from 'react'
import { ValidationType } from 'types/ValidationType'
import { useStyles } from './style'

interface Props {
  validation: ValidationType
  style?: string
}

export default React.memo(function ValidateLabel({ validation = 'blank', style }: Props) {
  const styles = useStyles()
  return (
    <div className={`${styles.container} ${style}`}>
      <img className={styles.check} src={validation === 'valid' ? CheckIconGreen : CancelIconRed} alt="" />
      <span className={styles.validate(validation)}>半角英数字6文字以上</span>
    </div>
  )
})
