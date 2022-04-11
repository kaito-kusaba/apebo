import { RootState } from "components/redux"
import { useSelector } from "react-redux"

export function useStateToProps() {
    return useSelector(({ user }: RootState) => user)
}

export function useInjection() {
    return {
        user: useStateToProps()
    }
}