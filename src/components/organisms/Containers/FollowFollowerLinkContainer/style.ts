import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    padding-bottom: 8px;
    display: flex;
  `
  const followFollowerLink = css`
    text-decoration: none;
    color: ${Colors.WHITE};
    font-weight: bold;
    font-size: 14px;
    margin-right: 8px;
    transition: all 0.2s;
  `
  const followFollowerContainer = css`
    color: ${Colors.SQUANT};
    font-size: 12px;
    margin-right: 22px;
    cursor: pointer;
    border-bottom: 1px solid ${Colors.BLACK_WASH};
    &:hover {
      opacity: 0.6;
      border-bottom: 1px solid ${Colors.GREY};
    }
  `

  return {
    container,
    followFollowerLink,
    followFollowerContainer,
  }
}
