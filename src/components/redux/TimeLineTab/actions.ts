import { TabButtonTypes } from 'types/TabButtonTypes'

export const ActionTypes = {
  SET_SELECTED: 'TIME_LINE_TAB/SET_SELECTED',
  CLEAR_SELECTED: 'TIME_LINE_TAB/CLEAR_SELECTED',
} as const

export const setSelected = (selected: TabButtonTypes) => {
  return { type: ActionTypes.SET_SELECTED, payload: selected }
}

export const clearSelected = () => {
  return { type: ActionTypes.CLEAR_SELECTED, payload: 'All' }
}
