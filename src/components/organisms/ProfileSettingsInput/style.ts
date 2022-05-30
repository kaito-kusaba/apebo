import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    margin-top: 24px;
  `

  const labelStyle = css`
    font-size: 14px;
    font-weight: 500;
    color: ${Colors.GREY};
    margin-bottom: 10px;
    display: flex;
  `

  const inputStyle = css`
    border: 1.5px solid ${Colors.EERIE_BLACK};
    border-radius: 8px;
    display: flex;
    padding: 14px 0 14px 16px;
    background-color: ${Colors.CHAOS_BLACK};
    color: ${Colors.WHITE};
    width: 814px;
  `

  return {
    container,
    labelStyle,
    inputStyle,
  }
}
