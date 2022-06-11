import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const chatContentDisplayStyle = css`
    color: ${Colors.PORPOISE};
    font-size: 14px;
    white-space: pre-wrap;
  `

  return {
    chatContentDisplayStyle,
  }
}
