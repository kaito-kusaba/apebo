import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const container = css`
    width: 388px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 24px;
    background-color: ${Colors.CHAOS_BLACK};
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
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

  const forgot = css`
    font-size: 12px;
    color: ${Colors.GREY};
    width: 100%;
    margin-bottom: 32px;
  `
  const forgotLink = css`
    color: ${Colors.YELLOW};
    font-weight: bold;
    font-size: 12px;
    text-decoration: underline;
  `

  const emailInput = css`
    margin-bottom: 24px;
  `
  const signInButton = css`
    margin-bottom: 16px;
  `

  const googleButton = css`
    margin-bottom: 24px;
  `
  const signUp = css`
    font-size: 14px;
    color: ${Colors.GREY};
    text-align: center;
    margin-bottom: 32px;
  `
  const signUpLink = css`
    color: ${Colors.YELLOW};
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  `

  const validationLabel = css`
    margin-bottom: 8px;
  `

  const invalid = css`
    color: ${Colors.RED};
    font-size: 12px;
    width: 100%;
    margin-bottom: 32px;
  `

  return {
    container,
    overlay,
    emailInput,
    forgot,
    forgotLink,
    signInButton,
    googleButton,
    signUp,
    signUpLink,
    validationLabel,
    invalid,
  }
}
