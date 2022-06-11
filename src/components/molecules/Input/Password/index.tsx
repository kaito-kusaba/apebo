import React, { useCallback, useState } from 'react'
import { useStyles } from './style'
import { EyeHideIconSquant, EyeIconSquant } from 'components/atoms/Icon'

export type PasswordInputType = 'default' | 'border'

type Props = {
  value: string
  onChange: (e: any) => void
  type: PasswordInputType
  placeholder?: string
  inputStyle?: string
  errorText?: string
}

export default React.memo(function PasswordInput({
  value,
  onChange,
  placeholder = 'パスワード',
  type,
  inputStyle,
  errorText,
  ...props
}: Props) {
  const [hidden, setHidden] = useState<boolean>(true)
  const styles = useStyles({ type, errorText })

  const onClick = useCallback(() => {
    setHidden(!hidden)
  }, [hidden])

  return (
    <div className={styles.container}>
      <input
        className={`${styles.passwordInput()} ${inputStyle}`}
        value={value}
        onChange={onChange}
        type={hidden ? 'password' : 'text'}
        placeholder={placeholder}
        {...props}
      />
      <button onClick={onClick} className={styles.button()}>
        <img src={hidden ? EyeHideIconSquant : EyeIconSquant} alt="" className={styles.passwordInputImg} />
      </button>
    </div>
  )
})
