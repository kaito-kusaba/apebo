import { css } from '@emotion/css'

export function useStyles() {
  const settingsCardContainer = css`
    display: flex;
  `
  const settingsCardIcon = css`
    width: 24px;
    height: 24px;
  `

  return {
    settingsCardContainer,
    settingsCardIcon,
  }
}
