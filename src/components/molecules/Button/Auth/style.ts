import { css } from '@emotion/css'
import { Colors } from 'constant'
import { ValidationType } from 'types/ValidationType'

interface Props {
  validation: ValidationType
}

export function useStyles({ validation }: Props) {
  const baseStyle = css`
    color: ${Colors.WHITE};
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    width: 340px;
    height: 48px;
    letter-spacing: 1px;
    border: none;
  `
  const container = () => {
    if (validation === 'valid') {
      return css`
        ${baseStyle};
        background-color: ${Colors.RED};
        cursor: pointer;
        color: ${Colors.WHITE};
      `
    } else {
      return css`
        ${baseStyle};
        background-color: ${Colors.INDIAN_RED};
        color: ${Colors.BRAINSTEM_GREY};
      `
    }
  }
  return {
    container,
  }
}
