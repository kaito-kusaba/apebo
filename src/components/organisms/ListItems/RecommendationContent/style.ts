import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    width: 340px;
    height: 100vh;
    padding: 16px 24px;
  `

  const label = css`
    font-size: 16px;
    color: ${Colors.WHITE};
    font-weight: 700;
  `

  return {
    container,
    label,
  }
}
