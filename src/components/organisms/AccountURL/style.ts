import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  `
  const img = css`
    width: 18px;
    height: 18px;
    margin-right: 4px;
  `
  const url = css`
    color: ${Colors.SKY_BLUE};
    font-size: 14px;
    overflow: hidden;
    max-width: calc(340px - (24px * 2) - 18px - 4px);
    white-space: nowrap;
    text-overflow: ellipsis;
  `

  return {
    container,
    img,
    url,
  }
}
