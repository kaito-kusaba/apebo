import { css } from '@emotion/css'
import { Colors } from 'constant'
import { useParams } from 'react-router-dom'

type Props = {
  uid: string
}

export function useStyles({ uid }: Props) {
  const params = useParams<{ uid: string }>()
  const baseContainer = css`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 16px 24px;
  `

  const talkUserContainer = () => {
    if (uid === params.uid) {
      return css`
        ${baseContainer}
        background-color: ${Colors.EERIE_BLACK};
        border-right: 3px ${Colors.YELLOW} solid;
      `
    } else {
      return css`
        ${baseContainer}
      `
    }
  }

  const userIcon = css`
    margin-right: 16px;
  `

  return {
    talkUserContainer,
    userIcon,
  }
}
