import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    display: flex;
    flex-direction: column;
    color: ${Colors.WHITE};
    overflow-y: scroll;
    width: 1202px;
    height: 100vh;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  `

  const label = css`
    z-index: 1;
    position: fixed;
    top: 0px;
  `

  const inputContainer = css`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0px;
    padding-bottom: 24px;
    background-color: ${Colors.BLACK_WASH};
  `

  const input = css`
    width: 1074px;
    font-weight: 400;
    max-height: 96px;
    padding: 12px 0 0 16px;
    font-size: 16px;
    color: ${Colors.WHITE};
    background-color: ${Colors.EERIE_BLACK};
    border-radius: 8px;
    overflow: hidden;
    border: none;
    resize: none;
    margin: 0 16px;
  `

  const addImage = css`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `

  const sendImage = css`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `
  return {
    container,
    label,
    inputContainer,
    input,
    addImage,
    sendImage,
  }
}
