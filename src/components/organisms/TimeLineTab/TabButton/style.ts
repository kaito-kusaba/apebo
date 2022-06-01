import { css } from '@emotion/css'
import { Colors } from 'constant'
import { TabButtonTypes } from 'types/TabButtonTypes'

type Props = {
  selected: TabButtonTypes
  type: TabButtonTypes
  isHovered: boolean
}

const baseButtonStyle = css`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  margin-right: 80px;
`

export function useStyles({ selected, type, isHovered }: Props) {
  const label = () => {
    if (selected === type) {
      return css`
        color: ${type === 'Vip' ? Colors.YELLOW : Colors.PORPOISE};
      `
    } else if (isHovered) {
      return css`
        color: ${Colors.GREY};
      `
    } else {
      return css`
        color: ${Colors.SQUANT};
      `
    }
  }

  const vip = () => {
    if (type === 'Vip') {
      return css`
        letter-spacing: 1px;
      `
    }
  }

  const button = () => {
    //選択状態
    if (selected === type) {
      return css`
        ${baseButtonStyle}
        color: ${Colors.PORPOISE};
      `
    } else {
      return css`
        ${baseButtonStyle}
        &:hover + #tabLabel {
          color: ${Colors.RED};
        }
      `
    }
  }

  const img = css`
    width: 18px;
    height: 18px;
    margin-right: 4px;
  `
  const underline = css`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    background-color: ${Colors.GREY};
    border-radius: 8px;
  `
  const selectedUnderline = css`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: ${Colors.YELLOW};
    border-radius: 8px;
  `

  return {
    button,
    label,
    img,
    underline,
    selectedUnderline,
    vip,
  }
}
