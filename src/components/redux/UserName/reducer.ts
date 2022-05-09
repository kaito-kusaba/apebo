import { ActionTypes } from './actions'

const initialState = {
  username: null,
}

export type UserNameStore = {
  username: string
}

/* reducer */
export const userNameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER_NAME: {
      return {
        ...state,
        username: action.payload,
      }
    }
    case ActionTypes.CLEAR_USER_NAME: {
      return {
        username: initialState,
      }
    }
    default: {
      return state
    }
  }
}
