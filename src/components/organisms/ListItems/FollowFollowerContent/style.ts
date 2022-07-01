import { css } from '@emotion/css'

export function useStyles() {
  const container = css`
    padding: 16px 24px;
  `

  const contentHeader = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const userContainer = css`
    display: flex;
  `

  const userName = css`
    margin-left: 16px;
  `

  const bio = css`
    margin: 16px 0 0 62px;
  `

  return {
    userName,
    container,
    contentHeader,
    userContainer,
    bio,
  }
}
