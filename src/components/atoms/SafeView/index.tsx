import PostModal from 'components/molecules/Modal/Post'
import { RootState } from 'components/redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'

interface Props {
  children?: React.ReactNode
  style?: string
}

export default React.memo(function SafeView({ children, style }: Props) {
  const styles = useStyles()
  const isOpen = useSelector(({ modal }: RootState) => modal.isOpen)
  return (
    <div className={`${styles.safeViewContainer} ${style}`}>
      {isOpen && <PostModal />}
      {children}
    </div>
  )
})
