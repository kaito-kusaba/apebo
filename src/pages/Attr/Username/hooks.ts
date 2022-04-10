import { useCallback, useState } from "react"
import { updateProfile } from "firebase/auth"
import { auth } from "libs/firebase"
import store from "components/redux/store"
import { actions } from "components/redux/User"

export function useInjection() {
    const [name, setName] = useState<string>('')
    const onChangeName = useCallback((e: any) => {
        setName(e.target.value)
        console.log(e.target.value)
    }, [name, setName])
    const onClickSubmit = useCallback(() => {
        if(auth.currentUser) {
            updateProfile(auth.currentUser, {
                displayName: name,
            }).then(() => {
                const dispatch = store.dispatch
                dispatch(actions.setUserName(name))
                console.log(`name: ${name}`)
                console.log(auth.currentUser?.displayName)
                console.log(auth.currentUser?.email)
            }).catch((e) => {
                alert("プロフィール更新に失敗")
                console.log(e)
            })
        } else {
            alert("ユーザーがない")
        }
    }, [])

    return {
        name,
        onChangeName,
        onClickSubmit,
    }
}