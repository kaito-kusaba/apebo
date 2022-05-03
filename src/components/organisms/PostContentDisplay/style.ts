import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const postContentDisplayContainerStyle = css`
    color: ${Colors.WHITE};
    font-size: 16px;
  `

  return {
    postContentDisplayContainerStyle,
  }
}
