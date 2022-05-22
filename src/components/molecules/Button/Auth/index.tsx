import React from 'react'
import { ValidationType } from 'types/ValidationType'
import { useStyles } from './style'

interface Props {
  onClick: () => void
  label: string
  type?: string
  style?: string
  validation: ValidationType
  onKeyDown?: (e: any) => void
}

export default React.memo(function AuthButton({
  onClick,
  label,
  type = 'submit',
  style,
  validation,
  onKeyDown,
}: Props) {
  const styles = useStyles({ validation })
  return (
    <input
      type={type}
      disabled={!(validation === 'valid')}
      onClick={onClick}
      value={label}
      className={`${styles.container()} ${style}`}
      onKeyDown={onKeyDown}
    />
  )
})
