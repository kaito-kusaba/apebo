import { css } from '@emotion/css'
import { Colors } from 'constant'
import type { PasswordInputType } from './'

type Props = {
  type: PasswordInputType
  errorText?: string
}

export function useStyles({ type, errorText }: Props) {
  const container = css`
    position: relative;
    width: 100%;
  `

  const basePasswordInput = css`
    color: ${Colors.WHITE};
    font-size: 16px;
    border: none;
    background-color: transparent;
    transition: all 0.3s;
    width: 100%;
  `

  const inputBorderStyle = () => {
    if (errorText === '') {
      switch (type) {
        case 'default':
          return css`
            border-bottom: 1px ${Colors.EERIE_BLACK} solid;
            &:focus {
              border-bottom: 1px ${Colors.WHITE} solid;
            }
            &::placeholder {
              color: ${Colors.SQUANT};
            }
          `
        case 'border':
          return css`
            border: 1.5px solid ${Colors.EERIE_BLACK};
            &:focus {
              border: 1.5px solid ${Colors.PORPOISE};
              color: ${Colors.WHITE};
            }
          `
        default:
          break
      }
    } else {
      switch (type) {
        case 'default':
          return css`
            border-bottom: 1px ${Colors.RED} solid;
            &:focus {
              border-bottom: 1px ${Colors.RED} solid;
            }
          `
        case 'border':
          return css`
            border: 1.5px solid ${Colors.RED};
            &:focus {
              border: 1.5px solid ${Colors.RED};
              color: ${Colors.WHITE};
            }
          `
        default:
          break
      }
    }
  }

  const passwordInput = () => {
    switch (type) {
      case 'default':
        return css`
          ${basePasswordInput}
          ${inputBorderStyle()}
          padding: 10px 0 6px 0;
          margin-bottom: 10px;
        `
      case 'border':
        return css`
          ${basePasswordInput}
          ${inputBorderStyle()}
          padding: 14px 16px;
          border-radius: 8px;
        `
    }
  }
  const passwordInputImg = css`
    margin-top: 4px;
    width: 20px;
    height: 20px;
  `

  const baseButton = css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
  `

  const button = () => {
    switch (type) {
      case 'default':
        return css`
          ${baseButton}
          width: 20px;
          height: 20px;
          top: 10px;
          right: 0;
        `
      case 'border':
        return css`
          ${baseButton}
          width: 24px;
          height: 24px;
          top: 12px;
          right: 16px;
        `
    }
  }

  return {
    container,
    passwordInput,
    passwordInputImg,
    button,
  }
}
