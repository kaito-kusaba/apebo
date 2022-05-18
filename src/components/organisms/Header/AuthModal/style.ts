import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
  `
  const cancelButton = css`
    position: absolute;
    right: 0px;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
  `

  const cancelImg = css`
    width: 24px;
    height: 24px;
  `
  const label = css`
    color: ${Colors.WHITE};
    font-size: 19px;
    font-weight: bold;
  `

  return {
    container,
    cancelButton,
    cancelImg,
    label,
  }
}
