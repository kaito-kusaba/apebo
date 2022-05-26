import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  errorText: string
}

export function useStyles({ errorText }: Props) {
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
    font-weight: 700;
    width: 862px;
    padding: 24px 0px;
  `

  const baseText = css`
    font-size: 14px;
  `

  const errorTextMessage = css`
    font-size: 12px;
    color: ${Colors.RED};
    margin-left: 16px;
  `

  const newPassword = css`
    ${baseText}
    font-weight: 500;
    color: ${Colors.PORPOISE};
    margin-top: 32px;
  `

  const inputNewPassword = css`
    position: relative;
    margin-top: 16px;
    background-color: ${Colors.CHAOS_BLACK};
    color: ${Colors.SQUANT};
    transition: all ease 0.3s;
  `

  const validate = css`
    margin-top: 10px;
  `

  const baseInputStyle = css`
    padding: 14px 16px;
    border: 1.5px solid ${Colors.EERIE_BLACK};
    border-radius: 8px;
    &:focus {
      border: 1.5px solid ${Colors.PORPOISE};
      color: ${Colors.WHITE};
    }
  `

  const buttonStyle = css`
    display: none;
  `

  const inputStyle = () => {
    if (errorText !== '') {
      return css`
        ${baseInputStyle}
        border: 1.5px solid ${Colors.RED};
      `
    } else {
      return css`
        ${baseInputStyle}
      `
    }
  }

  const inputPasswordConfirm = css`
    padding: 14px 0 14px 16px;
    margin-top: 24px;
    width: 814px;
    border: 1.5px solid ${Colors.EERIE_BLACK};
    border-radius: 8px;
    background-color: ${Colors.CHAOS_BLACK};
    color: ${Colors.SQUANT};
  `

  const inputContainer = css`
    position: relative;
  `

  const baseInfo = css`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 16px;
    top: 12px;
    bottom: 12px;
  `

  const info = () => {
    if (errorText !== '') {
      return css`
        ${baseInfo}
      `
    } else {
      return css`
        display: none;
      `
    }
  }

  return {
    container,
    top,
    baseText,
    errorTextMessage,
    newPassword,
    inputNewPassword,
    inputPasswordConfirm,
    info,
    inputStyle,
    buttonStyle,
    inputContainer,
    validate,
  }
}
