import { css } from '@emotion/css'

export function useStyles() {
  const tabContainer = css`
    display: flex;
    padding: 0 24px 24px 24px;
  `

  return {
    tabContainer,
  }
}
