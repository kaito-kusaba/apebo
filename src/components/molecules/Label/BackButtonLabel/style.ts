import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
    align-items: flex-end;
    padding: 24px;
  `

  const label = css`
    color: ${Colors.WHITE};
    font-size: 19px;
    font-weight: 700;
  `

  const img = css`
    width: 24px;
    height: 24px;
    margin-right: 16px;
    cursor: pointer;
  `

  return {
    container,
    label,
    img,
  }
}
