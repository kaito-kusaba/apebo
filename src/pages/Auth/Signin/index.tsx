import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from 'components/redux/Modal'

export default function SigninScreen() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.setSignInModal(true))
    navigate('/')
  }, [])
  return <></>
}
