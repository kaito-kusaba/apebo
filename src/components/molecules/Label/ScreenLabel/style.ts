import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const screenLabel = css`
    padding: 24px 0 24px 24px;
    background-color: ${Colors.BLACK_WASH};
    color: ${Colors.WHITE};
    font-size: 19px;
    font-weight: bold;
  `

  return {
    screenLabel,
  }
}
