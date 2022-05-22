import { TabButtonTypes } from 'types/TabButtonTypes'
import { ActionTypes } from './actions'

const initialState: TimeLineTabStore = {
  selected: 'All',
}

export type TimeLineTabStore = {
  selected: TabButtonTypes
}

/* reducer */
export const timeLineTabReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_SELECTED: {
      return {
        ...state,
        selected: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
