import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const label = css`
    color: ${Colors.WHITE};
  `

  return {
    label,
  }
}
