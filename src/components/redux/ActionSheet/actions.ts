import { ActionSheetTypes } from 'types/ActionSheetTypes'

export const ActionTypes = {
  SET_ACTION_SHEET: 'ACTION_SHEET/SET_ACTION_SHEET',
  SET_ACTION_SHEET_OPEN: 'ACTION_SHEET/SET_ACTION_SHEET_OPEN',
} as const

export const setActionSheetData = (data: ActionSheetTypes) => {
  return { type: ActionTypes.SET_ACTION_SHEET, payload: data }
}

export const setActionSheetOpen = (visible: boolean) => {
  return { type: ActionTypes.SET_ACTION_SHEET_OPEN, payload: visible }
}
