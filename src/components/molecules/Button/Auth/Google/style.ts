import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid ${Colors.PORPOISE};
    width: 100%;
    height: 48px;
    background-color: transparent;
  `

  const googleIcon = css`
    width: 24px;
    height: 24px;
    margin-right: 10px;
  `
  const label = css`
    color: ${Colors.PORPOISE};
    font-size: 14px;
  `

  return {
    container,
    googleIcon,
    label,
  }
}
