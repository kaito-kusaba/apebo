import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const screenLabelContainer = css`
    width: 848px;
    padding: 14px 16px;
    background-color: ${Colors.BLACK_WASH};
    display: flex;
    align-items: center;
  `
  const screenLabel = css`
    color: ${Colors.WHITE};
    font-size: 19px;
    font-weight: bold;
  `
  const screenLabelSubTitle = css`
    color: ${Colors.SQUANT};
    font-size: 12px;
  `

  return {
    screenLabelContainer,
    screenLabel,
    screenLabelSubTitle,
  }
}
