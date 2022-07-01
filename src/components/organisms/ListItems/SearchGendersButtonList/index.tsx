import Check from 'components/molecules/Button/Check'
import React from 'react'
import { useInjection } from './hooks'
import { Genders } from 'constant'
import { CheckedMap } from 'components/contexts/useCheckedMap'

type Props = {
  checks: CheckedMap
  setChecked: (checkedMap: CheckedMap) => void
}

export default React.memo(function SearchPlayStylesButtonList({ checks, setChecked }: Props) {
  const { genders } = useInjection({ setChecked })

  return (
    <>
      {genders.map(item => {
        const checked = checks[item.id]
        return (
          <Check
            key={item.id}
            src={checks[item.id] ? Genders.GenderMonoImageArray[item.id] : Genders.GenderWhiteImageArray[item.id]}
            checked={checked}
            onClick={() => setChecked({ [item.id]: !checks[item.id] })}
          />
        )
      })}
    </>
  )
})
