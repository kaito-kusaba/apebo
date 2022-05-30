import type { User, UserData } from 'types/User'

export const ActionTypes = {
  SET_USER: 'USER/SET_USER',
  SET_USER_DATA: 'USER/SET_USER_DATA',
  CLEAR_USER: 'USER/CLEAR_USER',
} as const

export const setUser = (user: User) => {
  return { type: ActionTypes.SET_USER, payload: user }
}

export const setUserData = (userData: UserData) => {
  return { type: ActionTypes.SET_USER_DATA, payload: userData }
}

export const clearUser = () => {
  return { type: ActionTypes.CLEAR_USER, payload: null }
}
