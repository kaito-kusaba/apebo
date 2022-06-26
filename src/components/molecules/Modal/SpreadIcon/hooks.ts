import { RootState } from 'components/redux'
import { actions } from 'components/redux/Modal'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useStateMap() {
  const { isOpenSpreadIcon, spreadIconSrc } = useSelector(({ modal }: RootState) => modal)

  return {
    isOpenSpreadIcon,
    spreadIconSrc,
  }
}

export function useInjection() {
  const { isOpenSpreadIcon, spreadIconSrc } = useStateMap()
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    dispatch(actions.setSpreadIconModal(false))
  }, [])

  return {
    isOpenSpreadIcon,
    spreadIconSrc,
    onCloseModal,
  }
}
