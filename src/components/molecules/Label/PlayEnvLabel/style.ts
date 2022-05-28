import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const text = css`
    color: ${Colors.SQUANT};
    font-size: 12px;
  `
  const imgContainer = css`
    display: flex;
    margin: 16px 0 4px 0;
  `

  const slash = css`
    margin: 0 2px;
  `

  const img = css`
    width: 18px;
    height: 18px;
    margin-right: 8px;
  `

  return {
    text,
    imgContainer,
    slash,
    img,
  }
}
