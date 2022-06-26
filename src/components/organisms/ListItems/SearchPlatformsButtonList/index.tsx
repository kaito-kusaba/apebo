import Check from 'components/molecules/Button/Check'
import React from 'react'
import { useInjection } from './hooks'
import { PlatformKeys } from 'constant/Platforms'
import { CheckedMap } from 'components/contexts/useCheckedMap'

type Props = {
  checks: CheckedMap
  setChecked: (checkedMap: CheckedMap) => void
}

export default React.memo(function SearchPlatformsButtonList({ checks, setChecked }: Props) {
  const { platforms } = useInjection({ setChecked })

  return (
    <div>
      {platforms.map(item => {
        const checked = checks[item.id]
        return (
          <Check
            key={item.id}
            label={PlatformKeys[item.id]}
            checked={checked}
            onClick={() => setChecked({ [item.id]: !checks[item.id] })}
          />
        )
      })}
    </div>
  )
})
