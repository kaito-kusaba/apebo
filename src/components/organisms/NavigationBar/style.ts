import { css } from '@emotion/css'
import { Colors } from 'constant'
import { NAVIGATION_WIDTH } from 'constant/Width'

export function useStyles() {
  const navigationBarStyle = css({
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
  return {
    navigationBarStyle,
  }
}
