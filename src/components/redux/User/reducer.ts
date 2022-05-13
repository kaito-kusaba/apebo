import { User } from 'types/User'
import { ActionTypes } from './actions'

const initialState = {
  user: null,
}

export type UserStore = {
  user: User | null
}

/* reducer */
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER: {
      return {
        ...state,
        user: action.payload,
      }
    }
    case ActionTypes.CLEAR_USER: {
      return {
        user: initialState,
      }
    }
    default: {
      return state
    }
  }
}
