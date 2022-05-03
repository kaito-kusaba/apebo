import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const postContentContainerStyle = css`
    background-color: ${Colors.BLACK_WASH};
    width: 814px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-bottom: 1px solid ${Colors.BLACK_TIE};
  `
  const postContentHeader = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const postContentUser = css`
    display: flex;
    align-items: center;
  `

  const postContentUserIcon = css`
    margin-right: 10px;
  `

  const postContentDisplay = css`
    margin: 14px 0;
  `

  return {
    postContentContainerStyle,
    postContentHeader,
    postContentUser,
    postContentUserIcon,
    postContentDisplay,
  }
}
