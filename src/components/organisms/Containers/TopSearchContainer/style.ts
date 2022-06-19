import { css } from '@emotion/css'

export function useStyles() {
  const container = css`
    display: flex;
    flex-direction: column;
    padding: 0 24px;
  `

  return {
    container,
  }
}
