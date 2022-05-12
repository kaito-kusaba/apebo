import React, { useCallback, useState } from 'react'
import { useStyles } from './style'
import { EyeHideIconSquant, EyeIconSquant } from 'components/atoms/Icon'

interface Props {
  value: string
  onChange: (e: any) => void
}

export default React.memo(function PasswordInput({ value, onChange, ...props }: Props) {
  const [hidden, setHidden] = useState<boolean>(true)
  const styles = useStyles()

  const onClick = useCallback(() => {
    setHidden(!hidden)
  }, [hidden])

  return (
    <div className={styles.container}>
      <input
        className={styles.passwordInput}
        value={value}
        onChange={onChange}
        type={hidden ? 'password' : 'text'}
        placeholder="パスワード"
        {...props}
      />
      <button onClick={onClick} className={styles.button}>
        <img src={hidden ? EyeHideIconSquant : EyeIconSquant} alt="" className={styles.passwordInputImg} />
      </button>
    </div>
  )
})
