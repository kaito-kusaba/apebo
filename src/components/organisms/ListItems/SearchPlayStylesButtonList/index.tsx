import Check from 'components/molecules/Button/Check'
import React from 'react'
import { useInjection } from './hooks'
import { PlayStyles } from 'constant'
import { CheckedMap } from 'components/contexts/useCheckedMap'

type Props = {
  checks: CheckedMap
  setChecked: (checkedMap: CheckedMap) => void
}

export default React.memo(function SearchPlayStylesButtonList({ checks, setChecked }: Props) {
  const { playStyles } = useInjection({ setChecked })

  return (
    <>
      {playStyles.map(item => {
        const checked = checks[item.id]
        return (
          <Check
            key={item.id}
            label={PlayStyles.PlayStyleKeys[item.id]}
            checked={checked}
            onClick={() => setChecked({ [item.id]: !checks[item.id] })}
          />
        )
      })}
    </>
  )
})
