import { PlatformTypes } from 'types/PlatformTypes'
import {
  PcIconPorpoise,
  XboxIconPorpoise,
  PlayStationIconPorpoise,
  SwitchIconPorpoise,
  MobileIconPorpoise,
} from 'components/atoms/Icon'

type PlatformsObjectTypes = {
  platform: PlatformTypes
  icon: string
}

export function useInjection() {
  const platforms: PlatformsObjectTypes[] = [
    { platform: 'PC', icon: PcIconPorpoise },
    { platform: 'PlayStation', icon: PlayStationIconPorpoise },
    { platform: 'Xbox', icon: XboxIconPorpoise },
    { platform: 'Switch', icon: SwitchIconPorpoise },
    { platform: 'Mobile', icon: MobileIconPorpoise },
  ]
  return {
    platforms,
  }
}
