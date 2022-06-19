import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
    flex-direction: column;
    color: ${Colors.WHITE};
    height: 100vh;
  `
  return {
    container,
  }
}
