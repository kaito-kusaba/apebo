import { User } from 'types/User'
import { ActionTypes } from './actions'

const initialState = {
  user: null,
  username: '',
}

export type UserStore = {
  user: User
  username: string
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
    case ActionTypes.SET_USERNAME: {
      return {
        ...state,
        username: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
