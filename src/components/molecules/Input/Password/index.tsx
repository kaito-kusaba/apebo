import React, { useCallback, useState } from 'react'
import { useStyles } from './style'
import { EyeHideIconSquant, EyeIconSquant } from 'components/atoms/Icon'

interface Props {
  value: string
  onChange: (e: any) => void
  placeholder?: string
  containerStyle?: string
  buttonStyle?: string
  inputStyle?: string
}

export default React.memo(function PasswordInput({
  value,
  onChange,
  placeholder = 'パスワード',
  containerStyle,
  buttonStyle,
  inputStyle,
  ...props
}: Props) {
  const [hidden, setHidden] = useState<boolean>(true)
  const styles = useStyles()

  const onClick = useCallback(() => {
    setHidden(!hidden)
  }, [hidden])

  return (
    <div className={`${styles.container} ${containerStyle}`}>
      <input
        className={`${styles.passwordInput} ${inputStyle}`}
        value={value}
        onChange={onChange}
        type={hidden ? 'password' : 'text'}
        placeholder={placeholder}
        {...props}
      />
      <button onClick={onClick} className={`${styles.button} ${buttonStyle}`}>
        <img src={hidden ? EyeHideIconSquant : EyeIconSquant} alt="" className={styles.passwordInputImg} />
      </button>
    </div>
  )
})
