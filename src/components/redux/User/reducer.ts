import { ActionTypes } from './actions'
import type { User } from 'types/User'

const initialState = {
  user: null,
}
export interface UserStore {
  user: User
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
        user: null,
      }
    }
    default: {
      return state
    }
  }
}
