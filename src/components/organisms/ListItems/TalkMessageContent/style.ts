import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  isHovered: boolean
}

export function useStyles({ isHovered }: Props) {
  const container = css`
    width: 1202px;
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    transition: 0.2s;
    :hover {
      background-color: ${Colors.EERIE_BLACK};
    }
  `

  const contentHeader = css`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
  `

  const contentUser = css`
    display: flex;
  `

  const userData = css`
    display: flex;
    align-items: flex-end;
  `

  const userName = css`
    margin-left: 16px;
  `

  const content = css`
    margin-top: 8px;
    margin-left: 16px;
  `

  const actionButton = () => {
    if (isHovered) {
      return css`
        opacity: 100%;
      `
    } else {
      return css`
        opacity: 0%;
      `
    }
  }

  return {
    container,
    contentHeader,
    contentUser,
    userName,
    content,
    actionButton,
    userData,
  }
}
