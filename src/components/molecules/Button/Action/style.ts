import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const BUTTON_SIZE = 32
  const actionButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    margin: 0 0 0 14px;
    background-color: ${Colors.BLACK_WASH};
  `

  const actionButtonImageStyle = css`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
  `

  const actionButtonDotsImageStyle = css`
    width: 20px;
    height: 20px;
    transition: all 0.2s;
    &:hover {
      opacity: 0.5;
    }
  `

  return {
    actionButton,
    actionButtonImageStyle,
    actionButtonDotsImageStyle,
  }
}
