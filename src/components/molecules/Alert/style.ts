import { css, keyframes } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  success: boolean
}

export function useStyles({ success }: Props) {
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
    animation: ${fadeInOut} 3.5s forwards;
    z-index: 1;
  `
  const container = () => {
    if (success) {
      return css`
        ${baseContainer}
        background-color: ${Colors.GREEN};
      `
    } else {
      return css`
        ${baseContainer}
        background-color: ${Colors.RED};
      `
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
