import { auth } from 'libs/firebase'

export function useInjection() {
  const user = auth.currentUser
  return {
    user,
  }
}
