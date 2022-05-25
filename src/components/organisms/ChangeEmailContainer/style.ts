import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
    flex-direction: column;
    color: ${Colors.WHITE};
    background-color: ${Colors.CHAOS_BLACK};
  `

  const baseText = css`
    font-size: 14px;
    margin-left: 24px;
  `

  const top = css`
    font-size: 19px;
    padding: 24px 24px;
    width: 862px;
  `

  const oldEmail = css`
    ${baseText}
    color: ${Colors.PORPOISE};
    margin-top: 24px;
  `

  const inputOldEmail = css`
    ${baseText}
    margin-top: 16px;
  `

  const newEmail = css`
    ${baseText}
    margin-top: 32px;
    color: ${Colors.PORPOISE};
  `

  const inputNewEmail = css`
    ${baseText}
    background-color: ${Colors.CHAOS_BLACK};
    border: 1.5px solid ${Colors.EERIE_BLACK};
    border-radius: 8px;
    width: 814px;
    height: 48px;
    color: ${Colors.SQUANT};
    padding: 16px 14px;
  `

  return {
    container,
    top,
    oldEmail,
    inputOldEmail,
    newEmail,
    inputNewEmail,
  }
}
