import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  disabled?: boolean
}

export function useStyles({ disabled }: Props) {
  const container = css`
    color: ${Colors.PORPOISE};
    width: 388px;
    background-color: ${Colors.CHAOS_BLACK};
    border-radius: 12px;
    padding: 0 24px;
    height: 451px;
  `

  const top = css`
    display: flex;
    align-items: center;
  `

  const img = css`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `

  const topLabel = css`
    margin-left: 70px;
    font-size: 19px;
    font-weight: 700;
    padding: 16px 0;
    color: ${Colors.WHITE};
  `

  const label = css`
    font-size: 14px;
    font-weight: 400;
    color: ${Colors.PORPOISE};
    margin: 16px 0 24px 0;
  `

  const mailAddress = css`
    font-size: 14px;
    color: ${Colors.PORPOISE};
    font-weight: 500;
  `

  const emailLabel = css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `

  const errorMsg = css`
    font-size: 12px;
    font-weight: 400;
    color: ${Colors.RED};
    margin-left: 16px;
  `

  const emailInput = css`
    padding: 14px 0 14px 16px;
    font-size: 14px;
    font-weight: 500;
    border: 1.5px solid ${Colors.EERIE_BLACK};
    border-radius: 8px;
    background-color: ${Colors.CHAOS_BLACK};
    margin-right: 24px;
  `

  const baseSubmit = css`
    padding: 14px 100px;
    font-size: 14px;
    font-weight: 700;
    color: ${Colors.PORPOISE};
    justify-content: center;
    align-items: center;
    background-color: ${Colors.RED};
    border-radius: 8px;
    border: none;
    margin-top: 152px;
    cursor: pointer;
    width: 100%;
  `

  const submit = () => {
    if (disabled) {
      return css`
        ${baseSubmit}
        background-color: ${Colors.INDIAN_RED};
        color: ${Colors.BRAINSTEM_GREY};
        cursor: default;
      `
    } else {
      return css`
        ${baseSubmit}
      `
    }
  }

  const forgotPasswordButton = css``
  return {
    container,
    forgotPasswordButton,
    top,
    label,
    img,
    topLabel,
    mailAddress,
    emailInput,
    submit,
    errorMsg,
    emailLabel,
  }
}
