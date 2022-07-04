import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const screenLabelContainer = css`
    width: 680px;
    height: 77px;
    padding: 24px 24px;
    background-color: ${Colors.CHAOS_BLACK};
    display: flex;
    align-items: center;
  `
  const screenLabel = css`
    color: ${Colors.WHITE};
    font-size: 19px;
    font-weight: bold;
  `

  return {
    screenLabelContainer,
    screenLabel,
  }
}
