import { CheckedMap } from 'components/contexts/useCheckedMap'
import React, { useEffect } from 'react'
import PlatformsContent from '../PlatformsContent'
import { useInjection } from './hooks'
import { useStyles, getStyles } from './style'

type Props = {
  checks: CheckedMap
  setChecked: (checkedMap: CheckedMap) => void
}

export default function PlatformsContentList({ checks, setChecked }: Props) {
  const styles = useStyles()
  const { platforms, userData } = useInjection()

  useEffect(() => {
    let map: { [key: number]: boolean } = {}
    userData.platforms?.forEach(id => (map[id] = true))

    setChecked(map)
  }, [])

  return (
    <div>
      <div className={styles.buttonContainer}>
        {platforms.map(item => {
          const checked = checks[item.id]
          const index = item.id
          const tagStyle = getStyles({ index, checked })
          return (
            <PlatformsContent
              platform={item.platform}
              icon={item.icon}
              key={item.id}
              style={tagStyle.button()}
              onClick={() => setChecked({ [item.id]: !checks[item.id] })}
            />
          )
        })}
      </div>
    </div>
  )
}
