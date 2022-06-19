import { css } from '@emotion/css'
import { Colors } from 'constant'

type GetStyleProps = {
  index?: number
  checked?: boolean
}

export function useStyles() {
  const genderLabel = css`
    display: flex;
    font-size: 14px;
    font-weight: 500;
    color: ${Colors.GREY};
    margin-top: 24px;
  `
  const buttonContainer = css`
    display: flex;
    align-items: center;
  `

  const buttonImg = css`
    width: 18px;
    height: 18px;
  `

  return {
    buttonContainer,
    genderLabel,
    buttonImg,
  }
}

const baseButton = css`
  padding: 6px 16px;
  color: ${Colors.PORPOISE};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 16px 0 0;
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
            background-color: ${Colors.PINK};
          `
        case 2:
          return css`
            ${baseButton}
            background-color: ${Colors.ORANGE};
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
