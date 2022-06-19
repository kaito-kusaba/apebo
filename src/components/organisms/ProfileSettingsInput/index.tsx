import type { ProfileLabelTypes } from 'types/ProfileLabelTypes'
import { useStyles } from './style'
import CharacterCounter from 'components/molecules/Counter'

type Props = {
  label: ProfileLabelTypes
  value: string
  onChange?: (e: any) => void
  maxLength?: number
  textarea?: boolean
  placeholder?: string
  errorMessage?: string
}

export default function ProfileSettingsInput({
  label,
  value,
  onChange,
  maxLength,
  textarea,
  placeholder,
  errorMessage,
}: Props) {
  const styles = useStyles({ errorMessage, value })

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={styles.labelStyle}>
          {label}
          {value.length < 1 && errorMessage && <span className={styles.errorText}>{errorMessage}</span>}
        </span>
        <CharacterCounter length={value.length} maxLength={maxLength!} />
      </div>
      {textarea ? (
        <textarea className={styles.textAreaStyle} value={value} onChange={onChange} maxLength={maxLength!} />
      ) : (
        <input
          placeholder={placeholder}
          className={styles.inputStyle()}
          type="text"
          value={value}
          onChange={onChange}
          maxLength={maxLength!}
        />
      )}
    </div>
  )
}
