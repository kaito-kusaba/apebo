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
    display: flex;
    align-items: center;
  `
  const userId = css`
    color: ${Colors.SQUANT};
    font-size: 14px;
  `
  const platformImage = css`
    width: 18px;
    height: 18px;
    margin: 4px 4px 0 0;
  `
  const platformImageContainer = css`
    margin-left: 8px;
    display: flex;
    align-items: center;
  `

  return {
    userNameContainerStyle,
    userName,
    userId,
    platformImage,
    platformImageContainer,
  }
}
