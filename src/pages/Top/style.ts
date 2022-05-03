import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const postContainer = css`
    padding: 0 8px;
    background-color: ${Colors.BLACK_WASH};
    height: 100vh;
  `
  return {
    postContainer,
  }
}
