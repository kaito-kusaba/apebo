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
    color: ${Colors.GREY};
    margin-top: 32px;
  `

  const inputNewPassword = css`
    margin-top: 16px;
    background-color: ${Colors.CHAOS_BLACK};
    color: ${Colors.SQUANT};
    transition: all 0.3s;
  `

  const validate = css`
    margin-top: 10px;
  `

  const inputPasswordContainer = css`
    margin: 16px 0 24px 0;
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
    info,
    validate,
    inputPasswordContainer,
  }
}
