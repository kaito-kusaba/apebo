import type { User } from 'types/User'

export const ActionTypes = {
  SET_USER: 'USER/SET_USER',
  CLEAR_USER: 'USER/CLEAR_USER',
} as const

export const setUser = (user: User) => {
  return { type: ActionTypes.SET_USER, payload: user }
}

export const clearUser = () => {
  return { type: ActionTypes.CLEAR_USER, payload: null }
}
