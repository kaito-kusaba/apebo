import { RootState } from 'components/redux'
import { useSelector } from 'react-redux'

export function useInjection() {
  const { user, userData } = useSelector(({ user }: RootState) => user)
  return {
    user,
    userData,
  }
}
