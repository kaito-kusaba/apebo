import { css } from '@emotion/css'

export function useStyles() {
  const container = css`
    padding-top: 12px;
  `

  const userIcon = css`
    position: absolute;
  `

  const userName = css`
    position: relative;
    left: 56px;
  `
  return {
    container,
    userName,
    userIcon,
  }
}
