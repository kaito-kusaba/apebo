import { css } from '@emotion/css'

export function useStyles() {
  const iconContainer = css`
    cursor: pointer;
    border: none;
    border-radius: 50%;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const icon = css`
    border-radius: 50%;
  `

  return {
    iconContainer,
    icon,
  }
}
