import { TabButtonTypes } from 'types/TabButtonTypes'

export const ActionTypes = {
  SET_CHECKED: 'TIME_LINE_TAB/SET_CHECKED',
} as const

export const setChecked = (isChecked: TabButtonTypes) => {
  return { type: ActionTypes.SET_CHECKED, payload: isChecked }
}
