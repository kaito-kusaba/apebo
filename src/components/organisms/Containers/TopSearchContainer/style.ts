import { css } from '@emotion/css'
import { Colors, ViewPort } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    background-color: ${Colors.CHAOS_BLACK};
    min-height: ${ViewPort.VIEWPORT_HEIGHT}px;
  `

  const searchButtonsListContainer = css`
    padding: 0 24px;
  `

  const searchButtonContainer = css`
    // margin-topは性別ボタンの下から検索ボタンまでを加算
    margin-top: calc(32px + 16px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  return {
    container,
    searchButtonsListContainer,
    searchButtonContainer,
  }
}
