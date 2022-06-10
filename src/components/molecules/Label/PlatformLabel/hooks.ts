import { MobileIcon, PCIcon, PSIcon, SwitchIcon, XboxIcon } from 'components/atoms/Icon'
import { doc, DocumentData, DocumentReference, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from 'components/redux'

export function useInjection() {
  const imgsTemp: string[] = []
  const [imgs, setImgs] = useState<string[]>([])
  const { user } = useSelector(({ user }: RootState) => user)
  const params = useParams<{ uid: string }>()
  const [ref, setRef] = useState<DocumentReference<DocumentData>>(doc(db, 'users', user!.uid))
  const [platforms, setPlatforms] = useState<number[]>()

  const fetchPlatforms = async () => {
    const mySnap = await getDoc(ref)
    setPlatforms(mySnap.data()?.platforms)
  }

  useEffect(() => {
    if (params) {
      setRef(doc(db, 'users', params.uid!))
    }
    fetchPlatforms()
  }, [])

  useEffect(() => {
    platforms?.map(platform => {
      switch (platform) {
        case 0:
          imgsTemp.push(PCIcon)
          break
        case 1:
          imgsTemp.push(PSIcon)
          break
        case 2:
          imgsTemp.push(SwitchIcon)
          break
        case 3:
          imgsTemp.push(XboxIcon)
          break
        case 4:
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
