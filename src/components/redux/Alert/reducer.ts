import { ActionTypes } from './actions'

const initialState = {
  isOpen: false,
}

export type AlertStore = {
  isOpen: boolean
}

/* reducer */
export const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_ALERT: {
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
