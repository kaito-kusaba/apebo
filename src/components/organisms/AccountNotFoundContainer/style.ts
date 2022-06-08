import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    color: ${Colors.WHITE};
  `

  return {
    container,
  }
}
