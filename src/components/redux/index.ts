import { ModalStore } from './Modal'
import { TimeLineTabStore } from './TimeLineTab'
import { UserStore } from './User'
import { UserNameStore } from './UserName'

export type RootState = {
  user: UserStore
  username: UserNameStore
  modal: ModalStore
  timelineTab: TimeLineTabStore
}
