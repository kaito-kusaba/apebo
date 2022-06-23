import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const BUTTON_SIZE = 18

  const actionButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin: 0 0 0 16px;
    width: 32px;
    height: 32px;
    background-color: transparent;
    &:hover {
      background-color: ${Colors.JET};
    }
  `

  const actionButtonDotsImageStyle = css`
    width: 18px;
    height: 18px;
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
