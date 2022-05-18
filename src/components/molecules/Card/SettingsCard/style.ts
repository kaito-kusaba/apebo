import { css } from '@emotion/css'
import { Colors } from 'constant'

interface Props {
  bottom?: number
  isSignOut?: boolean
}

export function useStyles({ bottom, isSignOut }: Props) {
  const settings = css`
    transition: all 0.1s;
    &:hover {
      background-color: ${Colors.CHAOS_BLACK};
    }
  `

  const settingsCardContainer = () => {
    if (bottom) {
      return css`
        display: flex;
        align-items: center;
        text-decoration: none;
        justify-content: space-between;
        padding: 16px 24px;
        margin-bottom: ${bottom}px;
      `
    } else {
      return css`
        display: flex;
        align-items: center;
        text-decoration: none;
        justify-content: space-between;
        padding: 16px 24px;
      `
    }
  }

  const leftContainer = css`
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;
  `

  const settingsCardIcon = css`
    width: 24px;
    height: 24px;
    margin-right: 24px;
  `
  const settingsArrow = css`
    width: 24px;
    height: 24px;
  `
  const label = () => {
    if (isSignOut) {
      return css`
        font-size: 16px;
        font-weight: 500;
        color: ${Colors.RED};
      `
    } else {
      return css`
        font-size: 16px;
        font-weight: 500;
        color: ${Colors.WHITE};
        margin-bottom: 2px;
      `
    }
  }

  const subTitle = css`
    color: ${Colors.GREY};
    font-size: 14px;
  `

  return {
    settings,
    settingsCardContainer,
    leftContainer,
    settingsCardIcon,
    settingsArrow,
    label,
    subTitle,
  }
}
