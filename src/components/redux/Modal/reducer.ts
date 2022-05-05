import { ActionTypes } from './actions'

const initialState = {
  isOpen: false,
}

export type ModalStore = {
  isOpen: boolean
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
    default: {
      return state
    }
  }
}
