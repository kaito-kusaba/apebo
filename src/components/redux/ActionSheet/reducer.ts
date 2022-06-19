import { ActionTypes } from './actions'
import type { ActionSheetTypes } from 'types/ActionSheetTypes'

const initialState = {
  data: {},
  visible: false,
}

export type ActionSheetStore = {
  data: ActionSheetTypes
  visible: boolean
}

/* reducer */
export const actionSheetReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_ACTION_SHEET: {
      return {
        ...state,
        data: action.payload,
      }
    }
    case ActionTypes.SET_ACTION_SHEET_OPEN: {
      return {
        ...state,
        visible: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
