export const ActionTypes = {
  SET_USER_NAME: 'USER/SET_USER_NAME',
  CLEAR_USER_NAME: 'USER/CLEAR_USER_NAME',
} as const

export const setUserName = (userName: string) => {
  return { type: ActionTypes.SET_USER_NAME, payload: userName }
}

export const clearUser = () => {
  return { type: ActionTypes.CLEAR_USER_NAME, payload: null }
}
