import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
    flex-direction: column;
    color: ${Colors.WHITE};
    background-color: ${Colors.CHAOS_BLACK};
    padding: 0px 24px;
    height: 100vh;
  `

  const top = css`
    font-size: 19px;
    padding: 24px 0;
    width: 862px;
    font-weight: 700;
  `
  return {
    container,
    top,
  }
}
