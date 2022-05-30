import { User, UserData } from 'types/User'
import { ActionTypes } from './actions'

const initialState = {
  user: null,
  userData: null,
}

export type UserStore = {
  user: User | null
  userData: UserData
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
    case ActionTypes.SET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      }
    }
    case ActionTypes.CLEAR_USER: {
      return {
        user: initialState,
        userData: initialState,
      }
    }
    default: {
      return state
    }
  }
}
