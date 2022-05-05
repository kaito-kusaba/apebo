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
    margin-bottom: 12px;
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
