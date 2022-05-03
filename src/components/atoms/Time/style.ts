import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const time = css`
    color: ${Colors.SQUANT};
    font-size: 14px;
  `

  return {
    time,
  }
}
