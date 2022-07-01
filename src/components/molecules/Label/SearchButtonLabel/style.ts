import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
    align-items: center;
    margin: 16px 0;
  `
  const label = css`
    color: ${Colors.WHITE};
    font-size: 16px;
    font-weight: bold;
  `
  const checkbox = css`
    display: none;
  `

  return {
    container,
    label,
    checkbox,
  }
}
