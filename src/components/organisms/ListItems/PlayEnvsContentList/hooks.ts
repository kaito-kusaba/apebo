import { PlayEnvTypes } from 'types/PlayEnvTypes'
import {
  PcIconPorpoise,
  XboxIconPorpoise,
  PlayStationIconPorpoise,
  SwitchIconPorpoise,
  MobileIconPorpoise,
} from 'components/atoms/Icon'

type PlayEnvsObjectTypes = {
  env: PlayEnvTypes
  icon: string
}

export function useInjection() {
  const envs: PlayEnvsObjectTypes[] = [
    { env: 'PC', icon: PcIconPorpoise },
    { env: 'PlayStation', icon: PlayStationIconPorpoise },
    { env: 'Xbox', icon: XboxIconPorpoise },
    { env: 'Switch', icon: SwitchIconPorpoise },
    { env: 'Mobile', icon: MobileIconPorpoise },
  ]
  return {
    envs,
  }
}
