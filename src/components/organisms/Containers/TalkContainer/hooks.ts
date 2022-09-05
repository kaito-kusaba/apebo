import { RootState } from 'components/redux'
import { addDoc, collection, doc, DocumentData, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export function useInjection() {
  const [data, setData] = useState<DocumentData>()
  const [text, setText] = useState<string>('')
  const params = useParams()
  const navigate = useNavigate()
  const { user } = useSelector(({ user }: RootState) => user)
  const textAreaRef = useResizeTextArea(text)
  const [messages, setMessages] = useState<DocumentData[]>([])

  const fetchUserData = async () => {
    const talkRef = doc(db, 'talk_rooms', params.room_id!)
    onSnapshot(talkRef, snapshot => {
      if (snapshot.data()?.talk_users.includes(user!.uid)) {
        setMessages(snapshot.data()?.messages)
      } else {
        navigate('/')
      }
    })
    const talkSnap = await getDoc(talkRef)
    const userRef = doc(
      db,
      'users',
      talkSnap.data()?.talk_users.find((name: string) => name !== user!.uid),
    )
    const userSnap = await getDoc(userRef)
    setData(userSnap.data())
  }

  useEffect(() => {
    if (params.room_id) {
      fetchUserData()
    }
  }, [params.room_id])

  useEffect(() => {
    const ref = document.getElementById('messageContainer')
    ref?.scrollIntoView(false)
  }, [messages])

  function useResizeTextArea(value: string | undefined) {
    const ref = useRef<HTMLTextAreaElement>(null)
    useEffect(() => {
      const element = ref.current
      if (!element) {
        return
      }
      const { paddingTop } = getComputedStyle(element)
      element.style.height = 'auto'
      element.style.height = `calc(${element.scrollHeight}px + ${paddingTop})`
    }, [value])
    return ref
  }

  const onChangeText = useCallback(e => {
    setText(e.target.value)
  }, [])

  const onKeyDown = useCallback(
    e => {
      if (e.ctrlKey) {
        if (e.keyCode === 13) {
          e.preventDefault()
          onClickSend()
        }
      }
    },
    [text],
  )

  const onClickAddImage = useCallback(() => {
    alert('画像を追加')
  }, [])

  const onClickSend = async () => {
    if (text.length > 0) {
      const talkRef = doc(db, 'talk_rooms', params.room_id!)
      try {
        const docRef = await addDoc(collection(db, 'talks'), {
          user_id: user!.uid,
          content: text,
          created_at: new Date(),
        })
        await updateDoc(docRef, {
          message_id: docRef.id,
        }).then(async () => {
          const docSnap = await getDoc(docRef)
          await updateDoc(talkRef, {
            messages: [...messages, docSnap.data()],
            update_at: new Date(),
          }).then(async () => {
            setMessages([...messages, docSnap.data()!])
          })
        })
        setText('')
      } catch (e) {
        console.error(e)
      }
    }
  }

  return {
    data,
    onChangeText,
    onKeyDown,
    text,
    textAreaRef,
    onClickAddImage,
    onClickSend,
    messages,
  }
}
