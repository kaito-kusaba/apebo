import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    position: relative;
    display: flex;
    flex-direction: column;
    color: ${Colors.WHITE};
  `

  const input = css`
    position: fixed;
    bottom: 24px;
  `
  return {
    container,
    input,
  }
}
