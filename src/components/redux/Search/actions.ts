import { SearchStateTypes } from 'types/SearchStateTypes'

export const ActionTypes = {
  SEARCH_STATE: 'SEARCH/SET_SEARCH_STATE',
  CLEAR_SEARCH_STATE: 'SEARCH/CLEAR_SEARCH_STATE',
} as const

export const setSearchState = (searchState: SearchStateTypes) => {
  return { type: ActionTypes.SEARCH_STATE, payload: searchState }
}

export const clearSearchState = () => {
  return { type: ActionTypes.CLEAR_SEARCH_STATE, payload: null }
}
