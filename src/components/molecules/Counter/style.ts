import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  size?: number
  weight?: number
}

export function useStyles({ size }: Props) {
  const baseLength = css`
    color: ${Colors.GREY};
    font-size: 12px;
  `

  const length = () => {
    if (!size)
      return css`
        ${baseLength}
      `
    switch (size) {
      case undefined:
        return css`
          ${baseLength}
        `
    }
  }
  return {
    baseLength,
    length,
  }
}
