import { css } from '@emotion/css'
import { Colors } from 'constant'

type Props = {
  disabled?: boolean
}

export function useStyles({ disabled }: Props) {
  const container = css`
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 388px;
  `
  const top = css`
    color: ${Colors.WHITE};
    font-size: 19px;
    font-weight: bold;
    padding: 16px 0;
  `

  const flexbox = css`
    display: flex;
    align-items: center;
  `

  const label = css`
    color: ${Colors.GREY};
    font-size: 14px;
    font-weight: 500;
    margin-right: 16px;
  `

  const labelContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `
  const info = css`
    color: ${Colors.GREY};
    font-size: 12px;
    font-weight: 400;
  `

  const counter = css`
    color: ${Colors.GREY};
    font-size: 12px;
    font-weight: 400;
  `

  const input = css`
    outline: none;
    border: 1px solid ${Colors.EERIE_BLACK};
    padding: 10px 16px;
    background-color: ${Colors.CHAOS_BLACK};
    border-radius: 8px;
    width: 100%;
    color: ${Colors.WHITE};
    margin: 10px 0 24px 0;
    transition: 0.3s;
    &:focus {
      border: 1px solid ${Colors.PORPOISE};
    }
    &::placeholder {
      color: ${Colors.SQUANT};
    }
  `

  const button = css`
    padding: 6px 16px;
    color: ${Colors.PORPOISE};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    background-color: ${Colors.EERIE_BLACK};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 400;
  `

  const buttonContainer = css`
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &::after {
      content: '';
      display: block;
      width: 30%;
    }
  `

  const img = css`
    width: 18px;
    height: 18px;
    margin-right: 8px;
  `

  const baseSubmit = css`
    background-color: ${Colors.RED};
    width: 100%;
    color: ${Colors.WHITE};
    border: none;
    border-radius: 8px;
    height: 48px;
    margin: 110px 0 32px 0;
    transition: 0.3s;
  `

  const submit = () => {
    if (disabled) {
      return css`
        ${baseSubmit}
        background-color: ${Colors.INDIAN_RED};
        color: ${Colors.BRAINSTEM_GREY};
      `
    } else {
      return css`
        ${baseSubmit}
        cursor: pointer;
        &:hover {
          background-color: ${Colors.PINK};
        }
      `
    }
  }

  return {
    container,
    top,
    flexbox,
    label,
    info,
    labelContainer,
    input,
    button,
    buttonContainer,
    img,
    submit,
    counter,
  }
}
