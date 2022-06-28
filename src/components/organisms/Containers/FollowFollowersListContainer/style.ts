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
    color: ${Colors.GREY};
    background-color: ${Colors.EERIE_BLACK};
    width: calc(100% / 2);
    padding: 18px 0;
    text-align: center;
    cursor: pointer;
  `

  const followButton = () => {
    if (location.pathname.match(/follows/)) {
      return css`
        ${baseButton}
        color: ${Colors.WHITE};
        background-color: ${Colors.BLACK_WASH};
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
        color: ${Colors.WHITE};
        background-color: ${Colors.BLACK_WASH};
      `
    } else {
      return css`
        ${baseButton}
      `
    }
  }

  const followerLabel = () => {
    if (location.pathname.match(/followers/)) {
      return css`
        padding-bottom: 15px;
        border-bottom: 3px solid ${Colors.YELLOW};
      `
    } else {
      return css``
    }
  }

  const followLabel = () => {
    if (location.pathname.match(/follows/)) {
      return css`
        padding-bottom: 15px;
        border-bottom: 3px solid ${Colors.YELLOW};
      `
    } else {
      return css``
    }
  }

  return {
    container,
    selectButton,
    followButton,
    followerButton,
    followerLabel,
    followLabel,
  }
}
