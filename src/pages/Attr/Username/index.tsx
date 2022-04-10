import { useInjection } from './hooks'
import React from 'react'

export default function SetUsernameScreen() {
    const { name, onChangeName, onClickSubmit } = useInjection()
    return (
        <div>
            <p>ユーザーネーム設定</p>
            <input type="text" value={name} onChange={onChangeName} maxLength={20} />
            <input type="submit" value='次へ' onClick={onClickSubmit} />
        </div>
    )
}