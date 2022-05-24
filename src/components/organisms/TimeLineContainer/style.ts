import { css } from '@emotion/css'

export function useStyles() {
  const container = css`
    display: flex;
    flex-direction: column;
  `

  return {
    container,
  }
}
