import { css } from '@emotion/css'
import { NAVIGATION_WIDTH } from 'constant/Width'

export function useStyles() {
  const safeViewContainer = css`
    margin-left: ${NAVIGATION_WIDTH}px;
  `

  return {
    safeViewContainer,
  }
}
