import { PlatformTypes } from 'types/PlatformTypes'
import {
  PcIconPorpoise,
  XboxIconPorpoise,
  PlayStationIconPorpoise,
  SwitchIconPorpoise,
  MobileIconPorpoise,
} from 'components/atoms/Icon'
import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

type PlatformsObjectTypes = {
  id: number
  platform: PlatformTypes
  icon: string
}

export function useInjection() {
  const { userData } = useSelector(({ user }: RootState) => user)
  const platforms: PlatformsObjectTypes[] = [
    { id: 0, platform: 'PC', icon: PcIconPorpoise },
    { id: 1, platform: 'PlayStation', icon: PlayStationIconPorpoise },
    { id: 2, platform: 'Xbox', icon: XboxIconPorpoise },
    { id: 3, platform: 'Switch', icon: SwitchIconPorpoise },
    { id: 4, platform: 'モバイル', icon: MobileIconPorpoise },
  ]

  return {
    platforms,
    userData,
  }
}
