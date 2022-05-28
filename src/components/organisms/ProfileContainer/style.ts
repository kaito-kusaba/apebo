import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const profileContainer = css`
    background-color: ${Colors.BLACK_WASH};
    padding: 8px 24px;
    margin-bottom: 8px;
    min-width: 340px;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `
  const icon = css`
    display: flex;
    margin-bottom: 16px;
  `

  const playEnvContainer = css`
    margin-bottom: 16px;
  `

  return {
    profileContainer,
    icon,
    playEnvContainer,
  }
}
