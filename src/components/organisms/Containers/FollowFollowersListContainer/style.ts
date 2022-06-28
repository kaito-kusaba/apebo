import { css } from '@emotion/css'
import { Colors } from 'constant'
import { useLocation } from 'react-router-dom'

export function useStyles() {
  const location = useLocation()
  const NAVIGATION_WIDTH = 78
  const PROFILE_WIDTH = 340
  const REDOMMENDATION_WIDTH = 340
  const AD_WIDTH = 300
  const container = css`
    /* width: calc(100% - ${NAVIGATION_WIDTH}px - ${PROFILE_WIDTH}px - ${REDOMMENDATION_WIDTH}px - ${AD_WIDTH}px); */
    width: 862px;
  `

  const selectButton = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
  `

  const baseButton = css`
    font-size: 14px;
    font-weight: 700;
    color: ${Colors.WHITE};
    width: calc(100% / 2);
    padding: 16px 0;
    text-align: center;
    cursor: pointer;
  `

  const followButton = () => {
    if (location.pathname.match(/follows/)) {
      return css`
        ${baseButton}
        border-bottom: 1px solid ${Colors.YELLOW};
      `
    } else {
      return css`
        ${baseButton}
      `
    }
  }

  const followerButton = () => {
    if (location.pathname.match(/followers/)) {
      return css`
        ${baseButton}
        border-bottom: 1px solid ${Colors.YELLOW};
      `
    } else {
      return css`
        ${baseButton}
      `
    }
  }

  return {
    container,
    selectButton,
    followButton,
    followerButton,
  }
}
