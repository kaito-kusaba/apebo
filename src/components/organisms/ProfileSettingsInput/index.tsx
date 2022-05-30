import { useStyles } from './style'

type Props = {
  label: string
  value: string
  onChange?: (e: any) => void
  maxLength?: number
  length?: number
}

export default function ProfileSettingsInput({ label, value, onChange, maxLength, length }: Props) {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={styles.labelStyle}>{label}</span>
        {label !== 'Discord ID' && (
          <span className={styles.lengthStyle}>
            {length}/{maxLength}
          </span>
        )}
      </div>
      <input className={styles.inputStyle} type="text" value={value} onChange={onChange} />
    </div>
  )
}
