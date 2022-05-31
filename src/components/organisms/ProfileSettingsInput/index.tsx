import type { ProfileLabelTypes } from 'types/ProfileLabelTypes'
import { useStyles } from './style'
import CharacterCounter from 'components/molecules/Counter'

type Props = {
  label: ProfileLabelTypes
  value: string
  onChange?: (e: any) => void
  maxLength?: number
  textarea?: boolean
}

export default function ProfileSettingsInput({ label, value, onChange, maxLength, textarea }: Props) {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={styles.labelStyle}>{label}</span>
        <CharacterCounter length={value.length} maxLength={maxLength!} />
      </div>
      {textarea ? (
        <textarea className={styles.textAreaStyle} value={value} onChange={onChange} />
      ) : (
        <input className={styles.inputStyle} type="text" value={value} onChange={onChange} />
      )}
    </div>
  )
}
