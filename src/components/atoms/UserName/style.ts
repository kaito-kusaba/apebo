import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const userNameContainerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  const userName = css`
    color: ${Colors.WHITE};
    font-size: 16px;
    font-weight: bold;
  `
  const userId = css`
    color: ${Colors.SQUANT};
    font-size: 14px;
  `

  return {
    userNameContainerStyle,
    userName,
    userId,
  }
}
