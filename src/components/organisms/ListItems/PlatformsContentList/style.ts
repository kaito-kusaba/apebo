import { css } from '@emotion/css'
import { Colors } from 'constant'

type GetStyleProps = {
  index?: number
  checked?: boolean
}

const baseButton = css`
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

export function getStyles({ index, checked }: GetStyleProps) {
  const button = () => {
    if (checked) {
      switch (index) {
        case 0:
          return css`
            ${baseButton}
            background-color: ${Colors.SKY_BLUE};
          `
        case 1:
          return css`
            ${baseButton}
            background-color: ${Colors.APNEA_DIVE};
          `
        case 2:
          return css`
            ${baseButton}
            background-color: ${Colors.KIWI_GREEN};
          `
        case 3:
          return css`
            ${baseButton}
            background-color: ${Colors.RED};
          `
        case 4:
          return css`
            ${baseButton}
            background-color: ${Colors.GREEN};
          `
      }
    } else {
      return css`
        ${baseButton}
      `
    }
  }
  return {
    button,
  }
}

export function useStyles() {
  const img = css`
    width: 18px;
    height: 18px;
    margin-right: 8px;
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
    buttonContainer,
  }
}
