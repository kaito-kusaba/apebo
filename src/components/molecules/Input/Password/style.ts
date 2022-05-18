import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    position: relative;
    width: 100%;
  `
  const passwordInput = css`
    padding: 10px 0 6px 0;
    color: ${Colors.WHITE};
    font-size: 16px;
    outline: none;
    border: none;
    background-color: transparent;
    transition: all ease 0.3s;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px ${Colors.EERIE_BLACK} solid;
    &:focus {
      border-bottom: 1px ${Colors.WHITE} solid;
    }
  `
  const passwordInputImg = css`
    margin-top: 4px;
    width: 20px;
    height: 20px;
  `

  const button = css`
    position: absolute;
    top: 10px;
    right: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    outline: none;
  `
  return {
    container,
    passwordInput,
    passwordInputImg,
    button,
  }
}
