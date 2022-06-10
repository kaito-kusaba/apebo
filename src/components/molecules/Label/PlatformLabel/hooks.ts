import { MobileIcon, PCIcon, PSIcon, SwitchIcon, XboxIcon } from 'components/atoms/Icon'
import { useEffect, useState } from 'react'
import { PlatformTypes } from 'types/PlatformTypes'

export function useInjection() {
  //TODO: Fetch Datas of Playing envs 'PC', 'PlayStation', 'Switch', 'Mobile', 'Xbox'
  const platforms: PlatformTypes[] = ['PC']
  const imgsTemp: string[] = []
  const [imgs, setImgs] = useState<string[]>([])

  useEffect(() => {
    platforms.map(platform => {
      switch (platform) {
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
    platforms,
    imgs,
  }
}
