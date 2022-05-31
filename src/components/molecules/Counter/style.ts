import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const length = css`
    color: ${Colors.GREY};
    font-size: 12px;
  `
  return {
    length,
  }
}
