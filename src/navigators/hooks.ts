import { useSelector } from 'react-redux'
import { RootState } from 'components/redux'

export function useInjection() {
  const { user } = useSelector(({ user }: RootState) => user)
  return {
    user,
  }
}
