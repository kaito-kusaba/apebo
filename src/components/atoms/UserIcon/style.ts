import { css } from '@emotion/css'

export function useStyles() {
  const iconContainer = css`
    border-radius: 50%;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  return {
    iconContainer,
  }
}
