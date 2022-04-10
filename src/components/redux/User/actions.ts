import type { User } from 'types/User'

export const ActionTypes = {
  SET_USER: 'USER/SET_USER',
  CLEAR_USER: 'USER/CLEAR_USER',
  SET_USERNAME: 'USER/SET_USERNAME',
} as const

export const setUser = (user: User) => {
  return { type: ActionTypes.SET_USER, payload: user }
}

export const clearUser = () => {
  return { type: ActionTypes.CLEAR_USER, payload: null }
}

export const setUserName = (userName: string) => {
  return { type: ActionTypes.SET_USERNAME, payload: userName }
} 