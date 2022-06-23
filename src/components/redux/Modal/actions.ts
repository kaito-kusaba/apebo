export const ActionTypes = {
  SET_MODAL: 'MODAL/SET_MODAL',
  SET_SIGN_IN_MODAL: 'MODAL/SET_SIGN_IN_MODAL',
  SET_SIGN_UP_MODAL: 'MODAL/SET_SIGN_UP_MODAL',
  SET_PASSWORD_RESET_MODAL: 'MODAL/SET_PASSWORD_RESET_MODAL',
} as const

export const setModal = (isOpen: boolean) => {
  return { type: ActionTypes.SET_MODAL, payload: isOpen }
}

export const setSignInModal = (isOpen: boolean) => {
  return { type: ActionTypes.SET_SIGN_IN_MODAL, payload: isOpen }
}

export const setSignUpModal = (isOpen: boolean) => {
  return { type: ActionTypes.SET_SIGN_UP_MODAL, payload: isOpen }
}

export const setPasswordResetModal = (isOpen: boolean) => {
  return { type: ActionTypes.SET_PASSWORD_RESET_MODAL, payload: isOpen }
}
