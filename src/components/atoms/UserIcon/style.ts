import { css } from '@emotion/css'

type Props = {
  size: number
}

export function useStyles({ size }: Props) {
  const iconContainer = css`
    cursor: pointer;
    border: none;
    border-radius: 50%;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${size}px;
    height: ${size}px;
  `
  const icon = css`
    border: 0;
    border-radius: 50%;
    width: ${size}px;
    height: ${size}px;
  `

  return {
    iconContainer,
    icon,
  }
}
