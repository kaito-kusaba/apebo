import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  pageIndex?: number
}

export function useStyles({ pageIndex }: Props) {
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
    font-weight: 400;
    color: ${Colors.PORPOISE};
    background-color: ${Colors.BLACK_WASH};
    width: calc(100% / 2);
    padding: 18px 0;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: ${Colors.EERIE_BLACK};
    }
  `

  const followButton = () => {
    if (pageIndex === 0) {
      return css`
        ${baseButton}
        color: ${Colors.WHITE};
        background-color: ${Colors.BLACK_WASH};
      `
    } else {
      return css`
        ${baseButton}
        &:hover {
          color: ${Colors.GREY};
          background-color: ${Colors.EERIE_BLACK};
        }
      `
    }
  }

  const followerButton = () => {
    if (pageIndex === 1) {
      return css`
        ${baseButton}
        color: ${Colors.WHITE};
        background-color: ${Colors.BLACK_WASH};
      `
    } else {
      return css`
        ${baseButton}
        &:hover {
          color: ${Colors.GREY};
          background-color: ${Colors.EERIE_BLACK};
        }
      `
    }
  }

  const followLabel = () => {
    if (pageIndex === 0) {
      return css`
        padding-bottom: 15px;
        border-bottom: 3px solid ${Colors.YELLOW};
        font-weight: 700;
      `
    }
  }

  const followerLabel = () => {
    if (pageIndex === 1) {
      return css`
        padding-bottom: 15px;
        border-bottom: 3px solid ${Colors.YELLOW};
        font-weight: 700;
      `
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
