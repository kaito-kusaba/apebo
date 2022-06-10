import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const profileContainer = css`
    background-color: ${Colors.BLACK_WASH};
    padding: 8px 24px;
    margin-bottom: 8px;
    min-width: 340px;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  `
  const icon = css`
    display: flex;
    margin-bottom: 16px;
  `

  const PlatformContainer = css`
    margin-bottom: 16px;
  `

  const actionButtons = css`
    display: flex;
    position: absolute;
    right: 24px;
    top: 16px;
  `

  return {
    profileContainer,
    icon,
    PlatformContainer,
    actionButtons,
  }
}
