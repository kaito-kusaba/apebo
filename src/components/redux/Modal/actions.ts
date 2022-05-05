export const ActionTypes = {
  SET_MODAL: 'MODAL/SET_MODAL',
} as const

export const setModal = (isOpen: boolean) => {
  return { type: ActionTypes.SET_MODAL, payload: isOpen }
}
