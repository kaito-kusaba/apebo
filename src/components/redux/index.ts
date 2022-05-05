import { ModalStore } from './Modal'
import { UserStore } from './User'

export type RootState = {
  user: UserStore
  modal: ModalStore
}
