import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
  `
  const button = css`
    background-color: transparent;
    cursor: pointer;
    border: none;
  `

  const inputContainer = css`
    position: relative;
  `

  const input = css`
    background-color: ${Colors.SQUANT};
    border: none;
    outline: none;
    color: ${Colors.WHITE};
    border-radius: 8px;
    width: 1074px;
    height: 48px;
    padding: 12px 56px 12px 16px;
    font-size: 16px;
    &::placeholder {
      color: ${Colors.GREY};
    }
  `

  const baseImg = css`
    width: 24px;
    height: 24px;
  `

  const addImageIcon = css`
    ${baseImg}
    margin-right: 16px;
  `

  const sendIcon = css`
    ${baseImg}
    margin-left: 16px;
  `

  const emojiButton = css`
    ${button}
    position: absolute;
    right: 16px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
  `

  const smileIcon = css`
    ${baseImg}
  `

  return {
    inputContainer,
    container,
    button,
    input,
    addImageIcon,
    sendIcon,
    smileIcon,
    emojiButton,
  }
}
