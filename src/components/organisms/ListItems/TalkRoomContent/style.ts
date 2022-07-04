import { css } from '@emotion/css'
import { Colors } from 'constant'
import { useLocation } from 'react-router-dom'

type Props = {
  roomId: string
}

export function useStyles({ roomId }: Props) {
  const location = useLocation()
  const baseContainer = css`
    display: flex;
    padding: 16px 24px;
  `

  const container = () => {
    if (location.pathname === `/talk/${roomId}`) {
      return css`
        ${baseContainer}
        background-color: ${Colors.EERIE_BLACK};
        border-right: 3px solid ${Colors.YELLOW};
      `
    } else {
      return css`
        ${baseContainer}
        cursor: pointer;
      `
    }
  }

  const userName = css`
    margin-left: 16px;
  `
  return {
    container,
    userName,
  }
}
