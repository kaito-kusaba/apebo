import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const BUTTON_SIZE = 32

  const actionButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin: 0 0 0 14px;
    background-color: ${Colors.BLACK_WASH};
    &:hover {
      background-color: ${Colors.CHAOS_BLACK};
    }
  `

  const actionButtonDotsImageStyle = css`
    width: 20px;
    height: 20px;
    margin: 10px;
    transition: all 0.2s;
  `

  const actionButtonImageStyle = css`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
  `

  return {
    actionButton,
    actionButtonImageStyle,
    actionButtonDotsImageStyle,
  }
}
