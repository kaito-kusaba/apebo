import { SearchStateTypes } from 'types/SearchStateTypes'
import { ActionTypes } from './actions'

const initialState = {
  searchState: {},
}

export type SearchStore = {
  searchState: SearchStateTypes
}

/* reducer */
export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SEARCH_STATE: {
      return {
        ...state,
        user: action.payload,
      }
    }
    case ActionTypes.CLEAR_SEARCH_STATE: {
      return {
        ...state,
        searchState: initialState,
      }
    }
    default: {
      return state
    }
  }
}
