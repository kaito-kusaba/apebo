import ActionSheet from 'components/molecules/ActionSheet'
import PostModal from 'components/molecules/Modal/Post'
import ForgotPasswordContainer from 'components/organisms/Containers/ForgotPasswordContainer'
import SigninForm from 'components/organisms/Forms/SigninForm'
import SignupForm from 'components/organisms/Forms/SignupForm'
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
  const { isOpen, isOpenSignin, isOpenSignup, isOpenPasswordReset } = useSelector(({ modal }: RootState) => modal)
  const { visible } = useSelector(({ actionSheet }: RootState) => actionSheet)
  return (
    <div className={`${styles.safeViewContainer} ${style}`}>
      {isOpen && <PostModal />}
      {isOpenSignin && <SigninForm />}
      {isOpenSignup && <SignupForm />}
      {isOpenPasswordReset && <ForgotPasswordContainer />}
      {visible && <ActionSheet />}
      {children}
    </div>
  )
})
