import { useInjection } from './hooks'
import React from 'react'
import SafeView from 'components/atoms/SafeView'

export default function SetUsernameScreen() {
  const { name, onChangeName, onClickSubmit } = useInjection()

  return (
    <SafeView>
      <p>ユーザーネーム設定</p>
      <input type="text" value={name} onChange={onChangeName} maxLength={20} />
      <input type="submit" value="次へ" onClick={onClickSubmit} />
    </SafeView>
  )
}
