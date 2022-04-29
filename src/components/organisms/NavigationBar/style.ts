import { css } from '@emotion/css'
import { Colors } from 'constant'

export function useStyles() {
  const navigationBarStyle = css({
    backgroundColor: Colors.BLACK,
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: 106,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  })
  return {
    navigationBarStyle,
  }
}
