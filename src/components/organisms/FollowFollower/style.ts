import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const followFollowerContainer = css``
  const followFollowerLink = css`
    text-decoration: none;
    color: ${Colors.WHITE};
    font-weight: bold;
    font-size: 14px;
    margin-right: 6px;
  `
  const followFollowerText = css`
    color: ${Colors.SQUANT};
    font-size: 14px;
    margin-right: 22px;
  `

  return {
    followFollowerContainer,
    followFollowerLink,
    followFollowerText,
  }
}
