import { DocumentData } from 'firebase/firestore'
import { ActionTypes } from './actions'

const initialState = {
  posts: [],
}

export type AccountPostStore = {
  posts: DocumentData[]
}

/* reducer */
export const accountPostsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_ACCOUNT_POSTS: {
      return {
        ...state,
        posts: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
