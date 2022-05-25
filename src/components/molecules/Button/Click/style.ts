import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  disabled?: boolean
}

export function useStyles({ disabled }: Props) {
  const baseEmailText = css`
    font-size: 14px;
    color: ${Colors.WHITE};
    padding: 10px 93px;
    margin-top: 48px;
    border: none;
    border-radius: 8px;
    background-color: ${Colors.RED};
    cursor: pointer;
  `

  const container = css`
    width: 100%;
    display: flex;
    justify-content: center;
  `

  const changeEmailButton = () => {
    if (disabled) {
      return css`
        ${baseEmailText}
        background-color: ${Colors.INDIAN_RED};
        color: ${Colors.BRAINSTEM_GREY};
        cursor: default;
      `
    } else {
      return css`
        ${baseEmailText}
      `
    }
  }

  return {
    baseEmailText,
    changeEmailButton,
    container,
  }
}
