import { css } from '@emotion/css'

type Props = {
  size: number
  disable: boolean
  isNotPostScreen: boolean
}

export function useStyles({ size, disable, isNotPostScreen }: Props) {
  const iconContainer = css`
    position: relative;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${size}px;
    height: ${size}px;
  `
  const icon = css`
    border: 0;
    border-radius: 50%;
    width: ${size}px;
    height: ${size}px;
  `

  const playStyle = () => {
    if (isNotPostScreen) {
      if (disable) {
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
      if (disable) {
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
