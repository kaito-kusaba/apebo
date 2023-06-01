import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  width?: number
}

export function useStyles({ width }: Props) {
  const baseScreenLabelContainer = css`
    width: 680px;
    height: 77px;
    padding: 24px 24px;
    background-color: ${Colors.BLACK_WASH};
    display: flex;
    align-items: center;
  `

  const screenLabelContainer = () => {
    if (width) {
      return css`
        ${baseScreenLabelContainer}
        width: ${width}px;
      `
    } else {
      return css`
        ${baseScreenLabelContainer}
      `
    }
  }

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
