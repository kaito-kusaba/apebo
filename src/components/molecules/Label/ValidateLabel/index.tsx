import { CancelIconRed, CheckIconGreen } from 'components/atoms/Icon'
import React from 'react'
import { ValidationType } from 'types/ValidationType'
import { useStyles } from './style'

type Props = {
  validation: ValidationType
  style?: string
  className?: string
}

export default React.memo(function ValidateLabel({ validation = 'blank', style, className }: Props) {
  const styles = useStyles()
  return (
    <div className={`${styles.container} ${style} ${className}`}>
      <img className={styles.check} src={validation === 'valid' ? CheckIconGreen : CancelIconRed} alt="" />
      <span className={styles.validate(validation)}>半角英数字6文字以上</span>
    </div>
  )
})
