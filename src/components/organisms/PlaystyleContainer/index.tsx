import { CheckedMap } from 'components/contexts/useCheckedMap'
import React, { useEffect } from 'react'
import { useInjection } from './hooks'
import { getStyles, useStyles } from './style'

type Props = {
  checks: CheckedMap
  setChecked: (checkedMap: CheckedMap) => void
}

export default function PlaystyleContainer({ checks, setChecked }: Props) {
  const { userData, playstyle } = useInjection()
  const styles = useStyles()

  useEffect(() => {
    let map: { [key: number]: boolean } = {}
    userData.playStyles?.forEach(id => (map[id] = true))

    setChecked(map)
  }, [])

  return (
    <div>
      <div className={styles.labelContainer}>プレイスタイル</div>
      <div className={styles.buttonContainer}>
        {playstyle.map(item => {
          const checked = checks[item.id]
          const index = item.id
          const tagStyle = getStyles({ index, checked })
          return (
            <button
              key={index}
              className={tagStyle.button()}
              onClick={() => setChecked({ [item.id]: !checks[item.id] })}>
              <img src={item.icon} className={styles.buttonImg} alt="" />
              {item.playstyle}
            </button>
          )
        })}
      </div>
    </div>
  )
}
