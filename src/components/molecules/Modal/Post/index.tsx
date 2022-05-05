import { RootState } from 'components/redux'
import { actions } from 'components/redux/Modal'
import React, { useCallback } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default React.memo(function PostModal() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector(({ modal }: RootState) => modal)

  const onClose = useCallback(() => {
    dispatch(actions.setModal(false))
  }, [])

  return <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}></Modal>
})
