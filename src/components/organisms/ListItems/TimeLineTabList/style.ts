import { css } from '@emotion/css'
import { Colors } from 'constant'
// import {
//   WorldIconYellow,
//   FollowingIconYellow,
//   StarIconYellow,
//   WorldIconGray,
//   FollowingIconGray,
//   StarIconGray,
//   WorldIconSquant,
//   FollowingIconSquant,
//   StarIconSquant,
// } from 'components/atoms/Icon'

export function useStyles() {
  const container = css`
    border-bottom: 3px solid ${Colors.YELLOW};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  `
  const text = css`
    font-weight: bold;
    color: ${Colors.WHITE};
  `

  const img = css`
    width: 18px;
    height: 18px;
  `

  return {
    container,
    text,
    img,
  }
}
