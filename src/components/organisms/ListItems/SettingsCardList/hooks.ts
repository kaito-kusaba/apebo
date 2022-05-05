import type { SettingsCardType } from 'types/SettingsCardTypes'
import { AccountIcon } from 'components/atoms/Icon'
import { AtmarkIcon } from 'components/atoms/Icon'
import { PasswordIcon } from 'components/atoms/Icon'
import { TermsIcon } from 'components/atoms/Icon'
import { SupportIcon } from 'components/atoms/Icon'

export const SETTINGS_CARD_DATAS: SettingsCardType[] = [
  {
    url: '/account/settings/profile',
    icon: AccountIcon,
    label: 'プロフィール',
    subTitle: 'アバターやユーザ名などのプロフィール情報を変更できます。',
  },
  {
    url: '/account/settings/email',
    icon: AtmarkIcon,
    label: 'メールアドレス',
    subTitle: 'メールアドレスを確認または変更できます。',
  },
  {
    url: '/account/settings/password',
    icon: PasswordIcon,
    label: 'パスワード',
    subTitle: 'パスワードはいつでも変更できます。',
  },
  { url: '/app/terms', icon: TermsIcon, label: '利用規約', subTitle: 'GamerPostの利用規約を確認できます。' },
  {
    url: '/app/support',
    icon: SupportIcon,
    label: 'お問い合わせ',
    subTitle: 'どなたでも、お気軽にお問い合わせください。',
  },
]
