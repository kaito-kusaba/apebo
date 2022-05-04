import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const screenLabelContainer = css`
    padding: 14px 24px;
    background-color: ${Colors.BLACK_WASH};
    display: flex;
    justify-content: space-between;
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

  const settingsImg = css`
    width: 24px;
    height: 24px;
  `

  return {
    screenLabelContainer,
    screenLabel,
    screenLabelSubTitle,
    settingsImg,
  }
}
