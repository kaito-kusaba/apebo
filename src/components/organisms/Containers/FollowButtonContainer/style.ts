import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css``

  const followButton = css`
    padding: 10px 104px;
    font-size: 14px;
    font-weight: 700;
    color: ${Colors.WHITE};
    background-color: ${Colors.RED};
    border-radius: 8px;
    border: none;
    margin-top: 24px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background-color: ${Colors.PINK};
    }
  `

  return {
    container,
    followButton,
  }
}
