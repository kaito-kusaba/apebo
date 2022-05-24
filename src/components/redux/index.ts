import { ModalStore } from './Modal'
import { TimeLineTabStore } from './TimeLineTab'
import { UserStore } from './User'
import { AlertStore } from './Alert'

export type RootState = {
  user: UserStore
  modal: ModalStore
  tab: TimeLineTabStore
  alert: AlertStore
}
