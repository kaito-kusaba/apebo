import { RootState } from 'components/redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PlatformTypes } from 'types/PlatformTypes'
import { CheckedMap } from 'components/contexts/useCheckedMap'

type Props = {
  setChecked: (checkedMap: CheckedMap) => void
}

type PlatformsObjectTypes = {
  id: number
  platform: PlatformTypes
}

export function useInjection({ setChecked }: Props) {
  const { searchState } = useSelector(({ search }: RootState) => search)

  useEffect(() => {
    // プレイ環境
    let platformMap: { [key: number]: boolean } = {}
    searchState.platforms?.forEach(id => (platformMap[id] = true))
    setChecked(platformMap)
  }, [])

  const platforms: PlatformsObjectTypes[] = [
    { id: 0, platform: 'PC' },
    { id: 1, platform: 'PlayStation' },
    { id: 2, platform: 'Xbox' },
    { id: 3, platform: 'Switch' },
    { id: 4, platform: 'モバイル' },
  ]

  return {
    platforms,
  }
}
