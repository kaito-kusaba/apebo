import { css } from '@emotion/css'

export function useStyles() {
  const dividerStyle = css({
    width: 32,
    height: 2,
    marginTop: 16,
    marginBottom: 16,
  })

  return {
    dividerStyle,
  }
}
