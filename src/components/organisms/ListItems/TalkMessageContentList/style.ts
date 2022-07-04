import { css } from '@emotion/css'

export function useStyles() {
  const LABEL_HEIGHT = 77
  const INPUT_HEIGHT = 77
  const container = css`
    margin-top: ${LABEL_HEIGHT}px;
    margin-bottom: ${INPUT_HEIGHT}px;
  `

  return {
    container,
  }
}
