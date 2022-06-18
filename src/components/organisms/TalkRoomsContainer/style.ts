import { css } from '@emotion/css'

export function useStyles() {
  const container = css`
    width: 340px;
    height: 100vh;
  `

  return {
    container,
  }
}
