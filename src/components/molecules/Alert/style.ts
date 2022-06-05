import { css, keyframes } from '@emotion/css'
import { Colors } from 'constant'
import { AlertTypes } from './index'

type Props = {
  visible: boolean
  AlertType: AlertTypes
  animationTime?: number
}

export function useStyles({ visible, AlertType, animationTime = 3.5 }: Props) {
  const fadeInOut = keyframes`
	0% {
		transform: translateY(-10px);
		opacity: 0;
	} 20% {
		transform: translateY(0px);
		opacity: 1;
	} 80% {
		transform: translateY(0px);
		opacity: 1;
	} 100% {
		transform: translateY(-10px);
		opacity: 0;
	}
  `

  const baseContainer = css`
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin: auto;
    width: 496px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeInOut} ${animationTime}s forwards;
    z-index: 1;
    border-radius: 8px;
  `
  const container = () => {
    if (AlertType === 'default') {
      if (visible) {
        return css`
          ${baseContainer}
          background-color: ${Colors.GREEN};
        `
      } else {
        return css`
          display: none;
        `
      }
    } else {
      if (visible) {
        return css`
          ${baseContainer}
          background-color: ${Colors.RED};
        `
      } else {
        return css`
          display: none;
        `
      }
    }
  }

  const text = css`
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.WHITE};
  `

  return {
    container,
    text,
  }
}
