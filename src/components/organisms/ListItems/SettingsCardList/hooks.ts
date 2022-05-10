import type { SettingsCardType } from 'types/SettingsCardTypes'
import { AccountIcon, AtmarkIcon, PasswordIcon, TermsIcon, SupportIcon, SignOutIconRed } from 'components/atoms/Icon'

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
    bottom: 32,
  },
  { url: '/app/terms', icon: TermsIcon, label: '利用規約', subTitle: 'GamerPostの利用規約を確認できます。' },
  {
    url: '/app/support',
    icon: SupportIcon,
    label: 'お問い合わせ',
    subTitle: 'どなたでも、お気軽にお問い合わせください。',
    bottom: 32,
  },
  {
    url: '/auth/signout',
    icon: SignOutIconRed,
    label: 'サインアウト',
    subTitle: null,
    isSignOut: true,
  },
]
