import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const notFound = css`
    color: ${Colors.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
  `

  return {
    notFound,
  }
}
