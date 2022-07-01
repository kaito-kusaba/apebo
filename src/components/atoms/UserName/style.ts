import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  disabled?: boolean
}

export function useStyles({ disabled }: Props) {
  const userNameContainerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `

  const baseUserName = css`
    color: ${Colors.WHITE};
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
  `

  const userName = () => {
    if (!disabled) {
      return css`
        ${baseUserName}
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      `
    } else {
      return css`
        ${baseUserName}
      `
    }
  }

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

  const genderImageContainer = css`
    margin-left: 8px;
    display: flex;
    align-items: center;
  `

  const genderImage = css`
    width: 24px;
    height: 24px;
  `

  return {
    userNameContainerStyle,
    userName,
    userId,
    platformImage,
    platformImageContainer,
    genderImage,
    genderImageContainer,
  }
}
