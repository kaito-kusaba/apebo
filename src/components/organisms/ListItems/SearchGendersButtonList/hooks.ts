import { RootState } from 'components/redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CheckedMap } from 'components/contexts/useCheckedMap'
import { GenderTypes } from 'types/GenderTypes'

type Props = {
  setChecked: (checkedMap: CheckedMap) => void
}

type GendersObjectTypes = {
  id: number
  gender: GenderTypes
}

export function useInjection({ setChecked }: Props) {
  const { searchState } = useSelector(({ search }: RootState) => search)

  useEffect(() => {
    // プレイ環境
    let genderMap: { [key: number]: boolean } = {}
    searchState.genders?.forEach(id => (genderMap[id] = true))
    setChecked(genderMap)
  }, [])

  const genders: GendersObjectTypes[] = [
    { id: 0, gender: '男性' },
    { id: 1, gender: '女性' },
    { id: 2, gender: 'その他' },
  ]

  return {
    genders,
  }
}
