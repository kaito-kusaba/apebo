import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  checked?: boolean
}

export function useStyles({ checked }: Props) {
  const baseText = css`
    font-size: 14px;
  `

  const text = () => {
    if (checked) {
      return css`
        ${baseText}
        color: ${Colors.BLACK};
      `
    } else {
      return css`
        ${baseText}
        color: ${Colors.PORPOISE};
      `
    }
  }

  const baseImg = css`
    width: 21px;
    height: 21px;
    display: flex;
    align-items: center;
  `

  const img = () => {
    if (checked) {
      return css`
        ${baseImg}
      `
    } else {
      return css`
        ${baseImg}
      `
    }
  }

  const baseButton = css`
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    cursor: pointer;
    margin-right: 16px;
  `

  const button = () => {
    if (checked) {
      return css`
        ${baseButton}
        background-color: ${Colors.YELLOW};
        color: ${Colors.BLACK};
      `
    } else {
      return css`
        ${baseButton}
        background-color: ${Colors.EERIE_BLACK};
      `
    }
  }

  return {
    text,
    img,
    button,
    baseText,
  }
}
