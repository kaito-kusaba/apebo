import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const notFound = css`
    color: ${Colors.WHITE};
  `

  return {
    notFound,
  }
}
