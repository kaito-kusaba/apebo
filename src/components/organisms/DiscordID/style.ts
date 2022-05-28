import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const discordIdContainer = css`
    display: flex;
    margin-bottom: 8px;
    cursor: pointer;
    align-items: center;
    transition: 0.2s;
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${Colors.WHITE};
    }
  `
  const discordIcon = css`
    width: 18px;
    height: 18px;
    margin: 4px 4px 0 0;
  `
  const discordId = css`
    color: ${Colors.GREY};
    font-size: 14px;
    overflow: hidden;
    max-width: calc(340px - (24px * 2) - 18px - 4px);
    white-space: nowrap;
    text-overflow: ellipsis;
  `
  const discordIdCopy = css`
    display: inline-flex;
  `

  return {
    discordIdContainer,
    discordIcon,
    discordId,
    discordIdCopy,
  }
}
