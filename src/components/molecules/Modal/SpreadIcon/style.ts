import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.CHAOS_BLACK};
    color: ${Colors.PORPOISE};
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    outline: none;
  `
  const overlay = css`
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
  `

  const spreadIcon = css`
    width: 100%;
    height: 100%;
  `

  return {
    container,
    overlay,
    spreadIcon,
  }
}
