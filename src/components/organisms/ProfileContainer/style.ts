import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const profileContainer = css`
    background-color: ${Colors.BLACK_WASH};
    padding: 8px 16px;
    width: 848px;
    margin-bottom: 8px;
  `
  const header = css`
    display: flex;
    margin: 8px 0 16px 0;
  `

  const userName = css`
    justify-content: flex-start;
    margin-left: 16px;
  `

  return {
    profileContainer,
    header,
    userName,
  }
}
