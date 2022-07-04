import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    background-color: ${Colors.RED};
    padding: 10px 93px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: ${Colors.PINK};
    }
  `

  const text = css`
    color: ${Colors.WHITE};
    font-size: 14px;
    font-weight: bold;
  `

  return {
    container,
    text,
  }
}
