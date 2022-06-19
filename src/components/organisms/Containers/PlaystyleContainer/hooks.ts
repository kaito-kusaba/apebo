import { EnjoyIconWhite, HeavyIconWhite } from 'components/atoms/Icon'
import { RootState } from 'components/redux'
import { useSelector } from 'react-redux'
import { PlayStyleTypes } from 'types/PlayStyleTypes'

type PlayStyleObjectTypes = {
  id: number
  playstyle: PlayStyleTypes
  icon: string
}

export function useInjection() {
  const { userData } = useSelector(({ user }: RootState) => user)
  const playstyle: PlayStyleObjectTypes[] = [
    { id: 0, playstyle: 'エンジョイ', icon: EnjoyIconWhite },
    { id: 1, playstyle: 'ガチ', icon: HeavyIconWhite },
  ]

  return {
    userData,
    playstyle,
  }
}
