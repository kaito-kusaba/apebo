import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  value: string
  errorMessage?: string
}

export function useStyles({ value, errorMessage }: Props) {
  const container = css`
    margin-top: 24px;
  `

  const labelStyle = css`
    font-size: 14px;
    font-weight: 500;
    color: ${Colors.GREY};
    margin-bottom: 10px;
    display: flex;
  `

  const labelContainer = css`
    display: flex;
    justify-content: space-between;
  `

  const errorText = css`
    font-size: 14px;
    color: ${Colors.RED};
    font-weight: 300;
    margin-left: 16px;
  `

  const baseInput = css`
    border: 1.5px solid ${Colors.EERIE_BLACK};
    border-radius: 8px;
    display: flex;
    padding: 14px 0 14px 16px;
    background-color: ${Colors.CHAOS_BLACK};
    color: ${Colors.WHITE};
    width: 100%;
    transition: all 0.2s;
  `
  const inputStyle = () => {
    if (value.length < 1 && errorMessage) {
      return css`
        ${baseInput}
        border: 1.5px solid ${Colors.RED};
      `
    }
    return css`
      ${baseInput}
    `
  }

  const textAreaStyle = css`
    ${inputStyle()}
    resize: none;
    height: 88px;
  `

  const lengthStyle = css`
    color: ${Colors.GREY};
    font-weight: 400;
    font-size: 12px;
  `

  return {
    labelContainer,
    length,
    container,
    labelStyle,
    inputStyle,
    lengthStyle,
    textAreaStyle,
    errorText,
  }
}
