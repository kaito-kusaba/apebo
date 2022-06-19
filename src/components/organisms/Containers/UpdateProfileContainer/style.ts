import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  disabled: boolean
}

export function useStyles({ disabled }: Props) {
  const container = css`
    display: flex;
    flex-direction: column;
    color: ${Colors.WHITE};
    background-color: ${Colors.CHAOS_BLACK};
    padding: 0px 24px;
    height: 100vh;
  `

  const top = css`
    font-size: 19px;
    padding: 24px 0;
    width: 862px;
    font-weight: 700;
  `

  const label = css``

  const avatar = css`
    margin-top: 16px;
  `

  const inputLabel = css`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    color: ${Colors.GREY};
    margin-bottom: 16px;
  `

  const avatarChangeImg = css`
    border: none;
    border-radius: 100%;
  `

  const avatarChange = css`
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${Colors.YELLOW};
    color: ${Colors.BLACK};
    margin-left: 24px;
    font-weight: 700;
    cursor: pointer;
  `

  const avatarDelete = css`
    font-size: 14px;
    font-weight: 500;
    color: ${Colors.PORPOISE};
    margin-left: 24px;
    background-color: ${Colors.CHAOS_BLACK};
    border: none;
    cursor: pointer;
  `

  const buttonStyle = css`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  `

  const baseChangeProfileButton = css`
    font-size: 14px;
    color: ${Colors.WHITE};
    padding: 10px 93px;
    margin-top: 48px;
    border: none;
    border-radius: 8px;
    background-color: ${Colors.RED};
    cursor: pointer;
  `

  const changeProfileButton = () => {
    if (!disabled) {
      return css`
        ${baseChangeProfileButton}
      `
    } else {
      return css`
        ${baseChangeProfileButton}
        cursor: default;
        background-color: ${Colors.INDIAN_RED};
      `
    }
  }

  const onSubmitContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const platformLabel = css`
    font-size: 14px;
    font-weight: 500;
    color: ${Colors.GREY};
    margin-top: 27px;
  `

  return {
    container,
    top,
    label,
    avatar,
    avatarChangeImg,
    inputLabel,
    avatarChange,
    avatarDelete,
    buttonStyle,
    changeProfileButton,
    onSubmitContainer,
    platformLabel,
  }
}
