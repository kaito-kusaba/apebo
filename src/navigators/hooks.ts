import { RootState } from 'components/redux'
import { useSelector } from 'react-redux'

export function useInjection() {
  const { user } = useSelector(({ user }: RootState) => user)
  const { username } = useSelector(({ username }: RootState) => username)
  return {
    user: user,
    username,
  }
}
