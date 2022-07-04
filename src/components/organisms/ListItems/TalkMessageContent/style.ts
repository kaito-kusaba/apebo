import { css } from '@emotion/css'

export function useStyles() {
  const container = css`
    padding: 16px 24px;
  `

  const leftContainer = css`
    display: flex;
    align-items: flex-start;
  `

  const rightContainer = css`
    display: flex;
    align-items: center;
  `

  const userName = css`
    margin-left: 16px;
  `

  const content = css`
    margin-top: 8px;
    margin-left: 16px;
  `

  return {
    container,
    leftContainer,
    rightContainer,
    userName,
    content,
  }
}
