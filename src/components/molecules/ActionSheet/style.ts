import { css, keyframes } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  x?: number
  y?: number
  type?: 'report' | 'delete' | 'myPage' | 'othersPage'
}

export function useStyles({ x, y, type }: Props) {
  const fadeIn = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; }
  `

  const container = css`
    position: absolute;
    left: calc(${x}px + 20px);
    top: calc(${y}px - 20px);
    animation: ${fadeIn} 0.2s forwards;
  `

  const image = css`
    width: 18px;
    height: 18px;
    margin-right: 10px;
  `

  const text = () => {
    switch (type) {
      case 'report':
        return css`
          color: ${Colors.PORPOISE};
        `
      case 'delete':
        return css`
          color: ${Colors.RED};
        `
      case 'myPage':
        return css`
          color: ${Colors.PORPOISE};
        `
      case 'othersPage':
        return css`
          color: ${Colors.PORPOISE};
        `
    }
  }

  const overlay = css`
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  `

  const button = css`
    display: flex;
    align-items: center;
    background-color: ${Colors.CHAOS_BLACK};
    border: none;
    border-radius: 12px;
    width: 200px;
    padding: 12px 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: ${Colors.EERIE_BLACK};
    }
  `

  return {
    container,
    image,
    text,
    overlay,
    button,
  }
}
