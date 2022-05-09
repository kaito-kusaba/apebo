import { TabButtonTypes } from 'types/TabButtonTypes'
import { ActionTypes } from './actions'

const initialState = {
  isChecked: 'All',
}

export type TimeLineTabStore = {
  isChecked: TabButtonTypes
}

/* reducer */
export const timeLineTabReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_CHECKED: {
      return {
        ...state,
        isChecked: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
