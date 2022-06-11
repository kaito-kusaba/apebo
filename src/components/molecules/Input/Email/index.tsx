import React from 'react'
import { useStyles } from './style'

export type EmailInputType = 'default' | 'border'

type Props = {
  value: string
  onChange: (e: any) => void
  style?: string
  placeholder?: string
  type: EmailInputType
}

export default React.memo(function EmailInput({ value, onChange, style, placeholder, type, ...props }: Props) {
  const styles = useStyles({ type })

  return (
    <input
      className={`${styles.emailInput()} ${style}`}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  )
})
