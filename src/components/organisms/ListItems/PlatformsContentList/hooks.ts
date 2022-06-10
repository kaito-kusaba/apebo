import { PlatformTypes } from 'types/PlatformTypes'
import {
  PcIconPorpoise,
  XboxIconPorpoise,
  PlayStationIconPorpoise,
  SwitchIconPorpoise,
  MobileIconPorpoise,
} from 'components/atoms/Icon'

type PlatformsObjectTypes = {
  id: number
  platform: PlatformTypes
  icon: string
}

export function useInjection() {
  const platforms: PlatformsObjectTypes[] = [
    { id: 0, platform: 'PC', icon: PcIconPorpoise },
    { id: 1, platform: 'PlayStation', icon: PlayStationIconPorpoise },
    { id: 2, platform: 'Xbox', icon: XboxIconPorpoise },
    { id: 3, platform: 'Switch', icon: SwitchIconPorpoise },
    { id: 4, platform: 'Mobile', icon: MobileIconPorpoise },
  ]

  return {
    platforms,
  }
}
