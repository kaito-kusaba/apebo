import { ModalStore } from './Modal'
import { TimeLineTabStore } from './TimeLineTab'
import { UserStore } from './User'
import { AlertStore } from './Alert'
import { AccountPostStore } from './AccountPost'
import { ActionSheetStore } from './ActionSheet'

export type RootState = {
  user: UserStore
  modal: ModalStore
  tab: TimeLineTabStore
  alert: AlertStore
  accountPosts: AccountPostStore
  actionSheet: ActionSheetStore
}
