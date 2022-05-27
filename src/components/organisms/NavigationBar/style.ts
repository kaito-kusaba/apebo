import { css } from '@emotion/css'
import { Colors } from 'constant'
import { NAVIGATION_WIDTH } from 'constant/Width'

export function useStyles() {
  const navigationBarStyle = css({
    zIndex: 10,
    backgroundColor: Colors.BLACK,
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: NAVIGATION_WIDTH,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  })

  const settingsButton = css`
    position: absolute;
    bottom: 32px;
    right: 16px;
    left: 16px;
  `

  return {
    navigationBarStyle,
    settingsButton,
  }
}
