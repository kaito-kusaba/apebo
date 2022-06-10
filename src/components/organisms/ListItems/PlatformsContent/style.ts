import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const img = css`
    width: 18px;
    height: 18px;
    margin-right: 8px;
  `

  const button = css`
    padding: 6px 16px;
    color: ${Colors.PORPOISE};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    background-color: ${Colors.EERIE_BLACK};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 400;
  `

  const buttonContainer = css`
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &::after {
      content: '';
      display: block;
      width: 30%;
    }
  `
  return {
    img,
    button,
    buttonContainer,
  }
}
