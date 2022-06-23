import { AddIconPorpoise, FemaleIconPorpoise, MaleIconPorpoise } from 'components/atoms/Icon'
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
    { id: 0, gender: '男性', icon: MaleIconPorpoise },
    { id: 1, gender: '女性', icon: FemaleIconPorpoise },
    { id: 2, gender: 'その他', icon: AddIconPorpoise },
  ]
  return {
    userData,
    genders,
  }
}
