import { css } from '@emotion/css'
import { Colors } from 'constant'
import {
  FollowingIconGray,
  FollowingIconSquant,
  FollowingIconYellow,
  StarIconGray,
  StarIconSquant,
  StarIconYellow,
  WorldIconGray,
  WorldIconYellow,
} from 'components/atoms/Icon'
import { useInjection } from './hooks'
import { TabButtonTypes } from 'types/TabButtonTypes'

export function useStyles() {
  const { isChecked } = useInjection()

  const tab = css`
    display: flex;
  `
  const text = css`
    font-weight: bold;
    color: ${Colors.WHITE};
  `
  const baseImg = css`
    width: 24px;
    height: 24px;
  `

  const allImg = css`
    ${baseImg}
    background-image: ${WorldIconYellow};
  `

  const followImg = css`
    ${baseImg}
    background-image: ${FollowingIconSquant};
  `

  const starImg = css`
    ${baseImg}
    background-image: ${StarIconSquant};
  `

  const label = css`
    display: flex;
    align-items: center;
  `

  const baseButton = css`
    display: flex;
    align-items: center;
  `
  const button = (value: TabButtonTypes) => {
    switch (isChecked) {
      case value:
        return css``
      case 'All':
        return css`
          background-image: ${WorldIconYellow};
          &:hover + ${allImg} {
            ${baseButton}
            background-image: ${WorldIconGray};
          }
        `
      case 'Following':
        return css`
          background-image: ${FollowingIconYellow};
          &:hover + ${followImg} {
            ${baseButton}
            background-image: ${FollowingIconGray};
          }
        `
      case 'Star':
        return css`
          background-image: ${StarIconYellow};
          &:hover + ${starImg} {
            ${baseButton}
            background-image: ${StarIconGray};
          }
        `
    }
  }

  return {
    tab,
    button,
    text,
    label,
    allImg,
    followImg,
    starImg,
  }
}
