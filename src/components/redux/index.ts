import { ModalStore } from './Modal'
import { TimeLineTabStore } from './TimeLineTab'
import { UserStore } from './User'

export type RootState = {
  user: UserStore
  modal: ModalStore
  timelineTab: TimeLineTabStore
}
