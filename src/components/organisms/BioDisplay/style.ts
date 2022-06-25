import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const bioDisplay = css`
    color: ${Colors.PORPOISE};
    margin-bottom: 16px;
    font-size: 14px;
    white-space: pre-wrap;
  `

  return {
    bioDisplay,
  }
}
