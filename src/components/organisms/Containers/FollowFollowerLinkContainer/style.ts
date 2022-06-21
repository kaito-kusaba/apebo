import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const followFollowerContainer = css`
    padding-bottom: 8px;
  `
  const followFollowerLink = css`
    text-decoration: none;
    color: ${Colors.WHITE};
    font-weight: bold;
    font-size: 14px;
    margin-right: 6px;
    transition: all 0.2s;
    &:hover {
      opacity: 0.6;
      text-decoration: underline;
    }
  `
  const followFollowerText = css`
    color: ${Colors.SQUANT};
    font-size: 12px;
    margin-right: 22px;
  `

  return {
    followFollowerContainer,
    followFollowerLink,
    followFollowerText,
  }
}
