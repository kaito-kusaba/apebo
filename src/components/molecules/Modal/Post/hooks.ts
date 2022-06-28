import { RootState } from 'components/redux'
import { actions as modalActions } from 'components/redux/Modal'
import { db } from 'libs/firebase'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDoc, collection } from 'firebase/firestore'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAlert } from 'components/molecules/Alert'

export function useInjection() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { isOpen } = useSelector(({ modal }: RootState) => modal)
  const { user } = useSelector(({ user }: RootState) => user)
  const [text, setText] = useState<string>('')
  const textAreaRef = useResizeTextArea(text)
  const showAlert = useAlert()
  const [disabled, setDisabled] = useState<boolean>(true)

  const onClose = useCallback(() => {
    dispatch(modalActions.setModal(false))
  }, [])

  const onChangeText = useCallback(e => {
    if (e.target.value === '\n') {
    } else {
      setText(e.target.value.replace(/(\r\n){3,}|\r{3,}|\n{3,}/, '\n\n'))
    }
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

  useEffect(() => {
    setDisabled(!(text.length > 0) || false)
  }, [text])

  const onClickPostButton = useCallback(() => {
    try {
      if (text.length > 0) {
        addDoc(collection(db, 'posts'), {
          user_id: user!.uid,
          content: text,
          created_at: new Date(),
        }).then(() => {
          // INFO: 投稿時は内容初期化する
          setText('')
          if (location.pathname !== '/') {
            navigate('/')
          }
          showAlert({ text: '投稿に成功しました。' })
        })
      } else {
        alert('投稿内容を入力してください。')
      }
      dispatch(modalActions.setModal(false))
    } catch (e) {
      showAlert({ text: '投稿に失敗しました。', type: 'error' })
      dispatch(modalActions.setModal(false))
    }
  }, [text])

  const onClickAddImage = useCallback(() => {
    alert('画像をアップロード')
  }, [])

  const onClickSmileIcon = useCallback(() => {
    alert('にこちゃんまーく')
  }, [])

  const onKeyDown = useCallback(
    e => {
      if (e.ctrlKey) {
        if (e.keyCode === 13) {
          e.preventDefault()
          onClickPostButton()
        }
      }
    },
    [text],
  )

  return {
    user,
    text,
    isOpen,
    onClose,
    onChangeText,
    onClickPostButton,
    onClickAddImage,
    onClickSmileIcon,
    onKeyDown,
    textAreaRef,
    disabled,
  }
}
