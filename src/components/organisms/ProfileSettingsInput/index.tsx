import { ProfileLabelTypes } from 'types/ProfileLabelTypes'
import { useStyles } from './style'

type Props = {
  label: ProfileLabelTypes
  value: string
  onChange?: (e: any) => void
  maxLength?: number
}

export default function ProfileSettingsInput({ label, value, onChange, maxLength }: Props) {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={styles.labelStyle}>{label}</span>
        {label !== 'Discord ID' && (
          <span className={styles.lengthStyle}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      <input className={styles.inputStyle} type="text" value={value} onChange={onChange} />
    </div>
  )
}
