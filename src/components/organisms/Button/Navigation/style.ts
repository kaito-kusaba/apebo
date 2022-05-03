import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const navigationButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    margin-top: 16px;
    background-color: ${Colors.BLACK};
  `

  const navigationButtonImageStyles = css`
    width: 46px;
    height: 46px;
  `

  return {
    navigationButton,
    navigationButtonImageStyles,
  }
}
