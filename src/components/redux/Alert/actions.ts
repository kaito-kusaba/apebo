export const ActionTypes = {
  SET_ALERT: 'ALERT/SET_ALERT',
} as const

export const setAlert = (isOpen: boolean) => {
  return { type: ActionTypes.SET_ALERT, payload: isOpen }
}
