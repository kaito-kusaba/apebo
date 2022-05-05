import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const bioDisplay = css`
    color: ${Colors.PORPOISE};
    margin-bottom: 16px;
  `

  return {
    bioDisplay,
  }
}
