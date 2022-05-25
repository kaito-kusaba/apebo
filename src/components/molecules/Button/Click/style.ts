import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  clicked?: boolean
}

export function useStyles({ clicked }: Props) {
  const baseEmailText = css`
    font-size: 14px;
    color: ${Colors.WHITE};
    width: 242px;
    padding: 10px 93px;
    margin-left: 310px;
    border: none;
    border-radius: 8px;
    background-color: ${Colors.RED};
    cursor: pointer;
  `

  const changeEmailButton = () => {
    if (clicked) {
      alert('変更しました')
      return css`
        ${baseEmailText}
        background-color: ${Colors.RED};
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
  }
}
