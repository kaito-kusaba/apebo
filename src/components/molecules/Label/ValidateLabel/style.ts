import { css } from '@emotion/css'
import { Colors } from 'constant'
import { ValidationType } from 'types/ValidationType'

export function useStyles() {
  const container = css`
    display: flex;
    width: 100%;
    margin-bottom: 8px;
  `
  const check = css`
    width: 18px;
    height: 18px;
  `
  const base = css`
    font-size: 12px;
  `
  const validate = (validation: ValidationType) => {
    if (validation === 'valid') {
      return css`
        ${base}
        color: ${Colors.GREEN};
      `
    } else {
      return css`
        ${base}
        color: ${Colors.RED};
      `
    }
  }

  return {
    container,
    validate,
    check,
  }
}
