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

  const baseText = css`
    font-size: 14px;
  `

  const top = css`
    font-size: 19px;
    padding: 24px 0;
    width: 862px;
    font-weight: 700;
  `

  const currentEmail = css`
    ${baseText}
    color: ${Colors.PORPOISE};
    margin-top: 24px;
  `

  const inputCurrentEmail = css`
    ${baseText}
    font-weight: bold;
    margin-top: 10px;
  `

  const newEmail = css`
    ${baseText}
    color: ${Colors.PORPOISE};
    margin: 32px 0 10px 0;
  `

  const errorTextMessage = css`
    ${baseText}
    color: ${Colors.RED};
    font-size: 12px;
    margin-left: 16px;
  `

  const baseInputNewEmail = css`
    ${baseText}
    background-color: ${Colors.CHAOS_BLACK};
    border: 1.5px solid ${Colors.EERIE_BLACK};
    border-radius: 8px;
    width: 100%;
    height: 48px;
    color: ${Colors.WHITE};
    padding: 16px 14px;
    transition: all 0.2s;
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

  const inputNewEmail = () => {
    if (errorText !== '') {
      return css`
        ${baseInputNewEmail}
        border: 1.5px solid ${Colors.RED};
      `
    } else {
      return css`
        ${baseInputNewEmail}
        &:focus {
          border-color: ${Colors.PORPOISE};
        }
      `
    }
  }

  return {
    container,
    top,
    currentEmail,
    inputCurrentEmail,
    newEmail,
    inputNewEmail,
    errorTextMessage,
    baseInputNewEmail,
    inputContainer,
    info,
  }
}
