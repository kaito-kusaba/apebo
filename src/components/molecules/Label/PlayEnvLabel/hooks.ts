import { MobileIcon, PCIcon, PSIcon, SwitchIcon, XboxIcon } from 'components/atoms/Icon'
import { useEffect, useState } from 'react'
import { PlayEnvTypes } from 'types/PlayEnvTypes'

export function useInjection() {
  //TODO: Fetch Datas of Playing envs 'PC', 'PlayStation', 'Switch', 'Mobile', 'Xbox'
  const envs: PlayEnvTypes[] = ['PC']
  const imgsTemp: string[] = []
  const [imgs, setImgs] = useState<string[]>([])

  useEffect(() => {
    envs.map(env => {
      switch (env) {
        case 'PC':
          imgsTemp.push(PCIcon)
          break
        case 'PlayStation':
          imgsTemp.push(PSIcon)
          break
        case 'Switch':
          imgsTemp.push(SwitchIcon)
          break
        case 'Xbox':
          imgsTemp.push(XboxIcon)
          break
        case 'Mobile':
          imgsTemp.push(MobileIcon)
          break
      }
      setImgs(imgsTemp)
    })
  }, [])

  return {
    envs,
    imgs,
  }
}
