import { FemaleIconWhite, MaleIconWhite } from 'components/atoms/Icon'
import { RootState } from 'components/redux'
import { useSelector } from 'react-redux'
import { GenderTypes } from 'types/GenderTypes'

type GendersObjectTypes = {
  id: number
  gender: GenderTypes
  icon: string
}

export function useInjection() {
  const { userData } = useSelector(({ user }: RootState) => user)
  const genders: GendersObjectTypes[] = [
    { id: 0, gender: '男性', icon: MaleIconWhite },
    { id: 1, gender: '女性', icon: FemaleIconWhite },
    { id: 2, gender: 'その他', icon: FemaleIconWhite },
  ]
  return {
    userData,
    genders,
  }
}
