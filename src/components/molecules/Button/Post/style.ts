import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  disabled?: boolean
}

export function useStyles({ disabled }: Props) {
  const container = css``

  const postButton = () => {
    if (disabled) {
      return css`
        background-color: ${Colors.RED};
        color: ${Colors.WHITE};
        font-weight: bold;
        font-size: 14px;
        width: 88px;
        height: 40px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          background-color: ${Colors.PINK};
        }
      `
    } else {
      return css``
    }
  }
  return {
    container,
    postButton,
  }
}
