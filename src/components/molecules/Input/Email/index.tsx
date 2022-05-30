import React from 'react'
import { useStyles } from './style'

type Props = {
  value: string
  onChange: (e: any) => void
  style?: string
}

export default React.memo(function EmailInput({ value, onChange, style, ...props }: Props) {
  const styles = useStyles()
  return (
    <input
      className={`${styles.emailInput} ${style}`}
      value={value}
      onChange={onChange}
      type="text"
      placeholder="メールアドレス"
      {...props}
    />
  )
})
