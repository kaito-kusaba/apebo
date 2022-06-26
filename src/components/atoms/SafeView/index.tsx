import ActionSheet from 'components/molecules/ActionSheet'
import PostModal from 'components/molecules/Modal/Post'
import SpreadIcon from 'components/molecules/Modal/SpreadIcon'
import ForgotPasswordModal from 'components/organisms/Containers/ForgotPasswordContainer'
import AttrModal from 'components/organisms/Containers/UsernameContainer'
import SigninModal from 'components/organisms/Forms/SigninForm'
import SignupModal from 'components/organisms/Forms/SignupForm'
import React from 'react'
import { useStyles } from './style'

interface Props {
  children?: React.ReactNode
  style?: string
}

export default React.memo(function SafeView({ children, style }: Props) {
  const styles = useStyles()
  return (
    <div className={`${styles.safeViewContainer} ${style}`}>
      <PostModal />
      <SigninModal />
      <SignupModal />
      <ForgotPasswordModal />
      <AttrModal />
      <SpreadIcon />
      <ActionSheet />
      {children}
    </div>
  )
})
