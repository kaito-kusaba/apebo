import { css } from '@emotion/css'

export function useStyles() {
  const container = css`
    width: 292px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
  `

  const userContainer = css`
    display: flex;
  `

  const userIcon = css``

  const userName = css`
    margin-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: calc(292px - (24px * 2) - 46px - 40px);
  `

  const actionButton = css``

  const img = css`
    width: 40px;
    height: 40px;
  `

  return {
    container,
    userName,
    userIcon,
    actionButton,
    userContainer,
    img,
  }
}
