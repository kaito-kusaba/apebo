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
  `

  const validationLabel = css`
    margin-bottom: 32px;
  `

  return {
    container,
    emailInput,
    forgot,
    forgotLink,
    signInButton,
    googleButton,
    signUp,
    signUpLink,
    validationLabel,
  }
}
