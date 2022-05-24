import { RootState } from 'components/redux'
import { actions as modalActions } from 'components/redux/Modal'
import { actions as alertActions } from 'components/redux/Alert'
import { db } from 'libs/firebase'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDoc, collection } from 'firebase/firestore'
import { useLocation, useNavigate } from 'react-router-dom'

export function useInjection() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { isOpen } = useSelector(({ modal }: RootState) => modal)
  const { user } = useSelector(({ user }: RootState) => user)
  const [text, setText] = useState<string>('')
  const textAreaRef = useResizeTextArea(text)

  const onClose = useCallback(() => {
    dispatch(modalActions.setModal(false))
  }, [])

  const onChangeText = useCallback(e => {
    setText(e.target.value)
  }, [])

  function useResizeTextArea(value: string | undefined) {
    const ref = useRef<HTMLTextAreaElement>(null)
    useEffect(() => {
      const element = ref.current
      if (!element) {
        return
      }
      const { borderTopWidth, borderBottomWidth, paddingTop, paddingBottom } = getComputedStyle(element)

      element.style.height = 'auto'
      element.style.height = `calc(${element.scrollHeight}px + ${paddingTop} + ${paddingBottom} + ${borderTopWidth} + ${borderBottomWidth})`
    }, [value])
    return ref
  }

  const onClickPostButton = useCallback(() => {
    try {
      if (text.length > 0) {
        addDoc(collection(db, 'posts'), {
          user_id: user!.uid,
          content: text,
          created_at: new Date(),
        }).then(() => {
          if (location.pathname !== '/') {
            navigate('/')
            dispatch(alertActions.setAlert(true))
          }
        })
      } else {
        alert('投稿内容を入力してください。')
      }
      dispatch(modalActions.setModal(false))
      dispatch(alertActions.setAlert(true))
    } catch (e) {
      alert('投稿に失敗しました。')
      console.log(e)
      dispatch(modalActions.setModal(false))
    }
  }, [text])

  const onClickAddImage = useCallback(() => {
    alert('画像をアップロード')
  }, [])

  const onClickSmileIcon = useCallback(() => {
    alert('にこちゃんまーく')
  }, [])

  return {
    user,
    text,
    isOpen,
    onClose,
    onChangeText,
    onClickPostButton,
    onClickAddImage,
    onClickSmileIcon,
    textAreaRef,
  }
}
