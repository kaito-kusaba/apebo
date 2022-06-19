import { useInjection } from './hooks'
import React, { useEffect } from 'react'
import { getStyles, useStyles } from './style'
import { CheckedMap } from 'components/contexts/useCheckedMap'

type Props = {
  checks: CheckedMap
  setChecked: (checkedMap: CheckedMap) => void
}

export default function GenderContainer({ checks, setChecked }: Props) {
  const styles = useStyles()
  const { genders, userData } = useInjection()

  useEffect(() => {
    let map: { [key: number]: boolean } = {}
    userData.genders?.forEach(id => (map[id] = true))

    setChecked(map)
  }, [])

  return (
    <div>
      <span className={styles.genderLabel}>性別</span>
      <div className={styles.buttonContainer}>
        {genders.map(item => {
          const checked = checks[item.id]
          const index = item.id
          const tagStyle = getStyles({ index, checked })
          return (
            <button
              key={index}
              className={tagStyle.button()}
              onClick={() => setChecked({ [item.id]: !checks[item.id] })}>
              <img src={item.icon} alt="" className={styles.buttonImg} />
              {item.gender}
            </button>
          )
        })}
      </div>
    </div>
  )
}
