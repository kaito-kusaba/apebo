import React from 'react'
import { useInjection } from './hooks'
import type { TabButtonTypes } from 'types/TabButtonTypes'
import { useStyles } from './style'

interface Props {
  label: string
  type: TabButtonTypes
  isChecked?: boolean
}

export default React.memo(function TabButton({ label, type }: Props) {
  const { img, onMouseToggle, onClick, selected, isHovered } = useInjection({ type })
  const styles = useStyles({ selected, type, isHovered })
  return (
    <button onClick={onClick} onMouseEnter={onMouseToggle} onMouseLeave={onMouseToggle} className={styles.button()}>
      <img src={img} alt="" className={styles.img} />
      <span id="tabLabel" className={styles.label()}>
        {label}
      </span>
      {isHovered && type !== selected && <span className={styles.underline} />}
      {type === selected && <span className={styles.selectedUnderline} />}
    </button>
  )
})
