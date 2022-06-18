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

  const followButton = css`
    padding: 10px 104px;
    font-size: 14px;
    font-weight: 700;
    color: ${Colors.WHITE};
    background-color: ${Colors.RED};
    border-radius: 8px;
    border: none;
    margin-top: 24px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background-color: ${Colors.PINK};
    }
  `

  const otherButton = css`
    border: 1px solid ${Colors.EERIE_BLACK};
    margin: 10px 24px 10px 10px;
    padding: 10px;
  `

  const messageImg = css`
    width: 20px;
    height: 20px;
  `

  const messageButton = css`
    border: 1px solid ${Colors.EERIE_BLACK};
    margin: 10px 0;
    padding: 10px;
  `

  const otherImg = css`
    width: 20px;
    height: 20px;
  `

  return {
    profileContainer,
    icon,
    PlatformContainer,
    actionButtons,
    followButton,
    otherButton,
    messageImg,
    otherImg,
    messageButton,
  }
}
