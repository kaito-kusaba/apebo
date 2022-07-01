import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  followed: boolean
}

export function useStyles({ followed }: Props) {
  const container = css``

  const baseFollowButton = css`
    width: 292px;
    height: 40px;
    font-size: 14px;
    font-weight: 700;
    color: ${Colors.WHITE};
    background-color: ${Colors.RED};
    border: none;
    border-radius: 8px;
    margin-top: 24px;
    transition: 0.2s;
    cursor: pointer;
  `

  const followButton = () => {
    if (!followed) {
      return css`
        ${baseFollowButton}
        &:hover {
          background-color: ${Colors.PINK};
        }
      `
    } else {
      return css`
        ${baseFollowButton}
        background-color: ${Colors.EERIE_BLACK};
        border: 1px solid ${Colors.EERIE_BLACK};
        &:hover {
          transition: 0.5s;
          border: 1px solid ${Colors.RED};
          background-color: none;
          color: ${Colors.RED};
        }
      `
    }
  }

  return {
    container,
    followButton,
  }
}
