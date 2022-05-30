import { useStyles } from './style'

type Props = {
  label: string
  value: string
  onChange?: (e: any) => void
}

export default function ProfileSettingsInput({ label, value, onChange }: Props) {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <span className={styles.labelStyle}>{label}</span>
      <input className={styles.inputStyle} type="text" value={value} onChange={onChange} />
    </div>
  )
}
