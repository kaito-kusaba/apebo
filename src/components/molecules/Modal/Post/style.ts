import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  disabled: boolean
}

export function useStyles({ disabled }: Props) {
  const modalContainer = css`
    background-color: ${Colors.BLACK_WASH};
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 524px;
    border-radius: 12px;
    outline: none;
  `
  const overlay = css`
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
  `

  const header = css`
    display: flex;
    margin: 24px auto 16px 24px;
  `

  const userIcon = css`
    margin-right: 8px;
  `
  const textArea = css`
    resize: none;
    background-color: ${Colors.BLACK_WASH};
    border: none;
    padding: 0 24px;
    width: 100%;
    color: ${Colors.PORPOISE};
    font-size: 19px;
    overflow: hidden;
  `

  const textAreaInfoContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
  `
  const counter = css`
    color: ${Colors.GREY};
    font-size: 16px;
    font-weight: 400;
  `
  const baseButton = css`
    background-color: ${Colors.RED};
    color: ${Colors.WHITE};
    font-weight: bold;
    font-size: 14px;
    width: 88px;
    height: 40px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: 0.2s;
  `
  const buttons = css`
    display: flex;
    align-items: center;
  `

  const imageButton = css`
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    background-color: transparent;
  `

  const emojiButton = css`
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    margin-left: 24px;
    background-color: transparent;
  `

  const icon = css`
    width: 24px;
    height: 24px;
  `

  const line = css`
    display: block;
    margin: 0 18px;
    height: 24px;
    width: 1px;
    background-color: ${Colors.JET};
  `

  const postButtonContainer = css`
    display: flex;
    align-items: center;
  `

  const button = () => {
    if (disabled) {
      return css`
        ${baseButton}
        background-color: ${Colors.INDIAN_RED};
        color: ${Colors.BRAINSTEM_GREY};
        cursor: default;
      `
    } else {
      return css`
        ${baseButton}
        &:hover {
          background-color: ${Colors.PINK};
        }
      `
    }
  }

  return {
    modalContainer,
    overlay,
    header,
    userIcon,
    textArea,
    textAreaInfoContainer,
    counter,
    buttons,
    icon,
    line,
    postButtonContainer,
    imageButton,
    emojiButton,
    button,
  }
}
