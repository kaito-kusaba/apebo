import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const discordIdContainer = css`
    display: flex;
    margin-bottom: 12px;
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${Colors.WHITE};
    }
  `
  const discordIcon = css`
    width: 24px;
    height: 24px;
    margin-right: 8px;
  `
  const discordId = css`
    color: ${Colors.GREY};
    font-size: 14px;
  `

  return {
    discordIdContainer,
    discordIcon,
    discordId,
  }
}
