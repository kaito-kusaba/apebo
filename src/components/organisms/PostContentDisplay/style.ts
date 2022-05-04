import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const postContentDisplayContainerStyle = css`
    color: ${Colors.PORPOISE};
    font-size: 16px;
  `

  return {
    postContentDisplayContainerStyle,
  }
}
