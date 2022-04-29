import { css } from '@emotion/css'

export function useStyles() {
  const navigationButton = css({
    border: 0,
    cursor: 'pointer',
  })
  const navigationButtonImageStyles = css({
    width: 56,
    height: 56,
  })

  return {
    navigationButton,
    navigationButtonImageStyles,
  }
}
