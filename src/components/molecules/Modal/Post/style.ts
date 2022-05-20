import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
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
  `
  const overlay = css`
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
  `
  const textAreaLength = css`
    color: ${Colors.GREY};
    font-size: 16px;
    font-weight: 100;
  `
  const postButton = css`
    background-color: ${Colors.RED};
    color: ${Colors.WHITE};
    font-weight: bold;
    font-size: 14px;
    width: 88px;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: ${Colors.PINK};
    }
  `
  const smileIcon = css`
    width: 24px;
    height: 24px;
    margin-left: 24px;
    cursor: pointer;
  `

  const addImage = css`
    width: 24px;
    height: 24px;
    margin-left: 24px;
    cursor: pointer;
  `

  return {
    modalContainer,
    overlay,
    header,
    userIcon,
    textArea,
    textAreaInfoContainer,
    textAreaLength,
    postButton,
    smileIcon,
    addImage,
  }
}
