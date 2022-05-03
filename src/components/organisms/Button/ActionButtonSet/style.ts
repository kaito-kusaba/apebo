import { css } from '@emotion/css'

export function useStyles() {
  const actionButtonsContainer = css`
    display: flex;
    align-items: center;
  `

  return {
    actionButtonsContainer,
  }
}
