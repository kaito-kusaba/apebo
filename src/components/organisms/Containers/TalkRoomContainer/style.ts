import { css } from '@emotion/css'

export function useStyles() {
  const LABEL_HEIGHT = 77
  const container = css`
    display: flex;
    overflow-y: scroll;
    height: 100vh;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  `

  const label = css`
    position: fixed;
    top: 0;
    z-index: 1;
  `

  const talkRoomList = css`
    margin-top: ${LABEL_HEIGHT}px;
    width: 340px;
  `

  return {
    label,
    talkRoomList,
    container,
  }
}
