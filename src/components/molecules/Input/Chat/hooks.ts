import { useCallback, useState } from 'react'

export function useInjection() {
  const [text, setText] = useState<string>('')

  const onChangeText = useCallback(e => {
    setText(e.target.value)
  }, [])

  return {
    text,
    onChangeText,
  }
}
