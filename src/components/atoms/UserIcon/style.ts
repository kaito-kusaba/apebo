import { css } from '@emotion/css'

type Props = {
  size: number
  playStyleHidden: boolean
  disabled?: boolean
  isNotPostScreen: boolean
}

export function useStyles({ size, playStyleHidden, isNotPostScreen, disabled }: Props) {
  const baseIconContainer = css`
    position: relative;
    border: none;
    border-radius: 50%;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${size}px;
    height: ${size}px;
  `

  const iconContainer = () => {
    if (disabled) {
      return css`
        ${baseIconContainer}
      `
    } else {
      return css`
        ${baseIconContainer}
        cursor: pointer;
      `
    }
  }

  const icon = css`
    border: 0;
    border-radius: 50%;
    width: ${size}px;
    height: ${size}px;
  `

  const playStyle = () => {
    if (isNotPostScreen) {
      if (playStyleHidden) {
        return css`
          display: none;
        `
      } else {
        return css`
          position: absolute;
          width: 28px;
          height: 28px;
          right: -4px;
          bottom: -4px;
        `
      }
    } else {
      if (playStyleHidden) {
        return css`
          display: none;
        `
      } else {
        return css`
          position: absolute;
          width: 24px;
          height: 24px;
          right: -4px;
          bottom: -4px;
        `
      }
    }
  }

  return {
    iconContainer,
    icon,
    playStyle,
  }
}
