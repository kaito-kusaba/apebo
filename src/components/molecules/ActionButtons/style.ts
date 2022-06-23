import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
    position: absolute;
    right: 24px;
    top: 8px;
  `

  const otherButton = css`
    border: 1px solid ${Colors.EERIE_BLACK};
    width: 40px;
    height: 40px;
    margin: 10px 0px 10px 10px;
    padding: 10px;
    background-color: transparent;
    &:hover {
      background-color: ${Colors.EERIE_BLACK};
    }
  `

  const img = css`
    width: 20px;
    height: 20px;
  `

  const messageButton = css`
    border: 1px solid ${Colors.EERIE_BLACK};
    width: 40px;
    height: 40px;
    margin: 10px 0;
    padding: 10px;
    background-color: transparent;
    &:hover {
      background-color: ${Colors.EERIE_BLACK};
    }
  `

  return {
    container,
    otherButton,
    messageButton,
    img,
  }
}
