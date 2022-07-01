import { RootState } from 'components/redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CheckedMap } from 'components/contexts/useCheckedMap'
import { PlayStyleTypes } from 'types/PlayStyleTypes'

type Props = {
  setChecked: (checkedMap: CheckedMap) => void
}

type PlayStylesObjectTypes = {
  id: number
  playStyle: PlayStyleTypes
}

export function useInjection({ setChecked }: Props) {
  const { searchState } = useSelector(({ search }: RootState) => search)

  useEffect(() => {
    // プレイ環境
    let playStyleMap: { [key: number]: boolean } = {}
    searchState.playStyles?.forEach(id => (playStyleMap[id] = true))
    setChecked(playStyleMap)
  }, [])

  const playStyles: PlayStylesObjectTypes[] = [
    { id: 0, playStyle: 'エンジョイ' },
    { id: 1, playStyle: 'ガチ' },
  ]

  return {
    playStyles,
  }
}
