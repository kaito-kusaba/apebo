import { ActionTypes } from './actions'

const initialState = {
  isOpen: false,
  isOpenSignin: false,
  isOpenSignup: false,
  isOpenPasswordReset: false,
  isOpenAttr: false,
  isOpenSpreadIcon: false,
  spreadIconSrc: '',
}

export type ModalStore = {
  isOpen: boolean
  isOpenSignin: boolean
  isOpenSignup: boolean
  isOpenPasswordReset: boolean
  isOpenAttr: boolean
  isOpenSpreadIcon: boolean
  spreadIconSrc: string
}

/* reducer */
export const modalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_MODAL: {
      return {
        ...state,
        isOpen: action.payload,
      }
    }
    case ActionTypes.SET_SIGN_IN_MODAL: {
      return {
        ...state,
        isOpenSignin: action.payload,
      }
    }
    case ActionTypes.SET_SIGN_UP_MODAL: {
      return {
        ...state,
        isOpenSignup: action.payload,
      }
    }
    case ActionTypes.SET_PASSWORD_RESET_MODAL: {
      return {
        ...state,
        isOpenPasswordReset: action.payload,
      }
    }
    case ActionTypes.SET_ATTR_MODAL: {
      return {
        ...state,
        isOpenAttr: action.payload,
      }
    }
    case ActionTypes.SET_SPREAD_ICON_MODAL: {
      return {
        ...state,
        isOpenSpreadIcon: action.payload.isOpen,
        spreadIconSrc: action.payload.icon,
      }
    }
    default: {
      return state
    }
  }
}
