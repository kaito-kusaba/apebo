import { css } from '@emotion/css'
import { Colors } from 'constant'
import { EmailInputType } from '.'

type Props = {
  type: EmailInputType
}

export function useStyles({ type }: Props) {
  const baseEmailInput = css`
    padding: 10px 0 6px 0;
    color: ${Colors.WHITE};
    font-size: 16px;
    border: none;
    background-color: transparent;
    transition: all ease 0.3s;
    width: 100%;
    color: ${Colors.SQUANT};
  `

  const inputBorderStyle = () => {
    switch (type) {
      case 'default':
        return css`
          border-bottom: 1px ${Colors.EERIE_BLACK} solid;
          &:focus {
            border-bottom: 1px ${Colors.WHITE} solid;
          }
        `
      case 'border':
        return css`
          border: 1.5px ${Colors.EERIE_BLACK} solid;
          &:focus {
            border: 1.5px ${Colors.PORPOISE} solid;
            color: ${Colors.WHITE};
          }
        `
      default:
        break
    }
  }

  const emailInput = () => {
    switch (type) {
      case 'default':
        return css`
          ${inputBorderStyle()}
          ${baseEmailInput}
          padding: 10px 0 6px 0;
          margin-bottom: 24px;
        `

      case 'border':
        return css`
          ${baseEmailInput}
          ${inputBorderStyle()}
          padding: 14px 0 14px 16px;
          border-radius: 8px;
          font-size: 14px;
        `
    }
  }

  return {
    emailInput,
  }
}
