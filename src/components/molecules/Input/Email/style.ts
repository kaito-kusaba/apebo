import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const emailInput = css`
    padding: 10px 0 6px 0;
    margin: 0 24px;
    color: ${Colors.WHITE};
    font-size: 16px;
    outline: none;
    border: none;
    background-color: transparent;
    transition: all ease 0.3s;
    border-bottom: 1px ${Colors.CHAOS_BLACK} solid;
    width: 100%;
    &:focus {
      border-bottom: 1px ${Colors.WHITE} solid;
    }
  `
  return {
    emailInput,
  }
}
