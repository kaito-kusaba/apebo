import UserIcon from 'components/atoms/UserIcon'
import SettingsLabel from 'components/molecules/Label/SettingsLabel'
import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'
import ProfileSettingsInput from 'components/organisms/ProfileSettingsInput'

export default React.memo(function UpdateProfileScreen() {
  const {
    newName,
    onChangeUserName,
    onSubmit,
    onChangeAvater,
    onChangeDelete,
    bio,
    discordId,
    website,
    onChangeBio,
    onChangeDiscordId,
    onChangeWebsite,
  } = useInjection()
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <SettingsLabel label="プロフィール" />
      <div className={styles.avatar}>
        <h3 className={styles.inputLabel}>アバター</h3>
        <span className={styles.buttonStyle}>
          <button onClick={onChangeAvater} className={styles.avatarChangeImg}>
            <UserIcon uid="1" size={72} disabled />
          </button>
          <button className={styles.avatarChange} onClick={onChangeAvater}>
            アバター画像を編集
          </button>
          <button className={styles.avatarDelete} onClick={onChangeDelete}>
            アバター画像を削除
          </button>
        </span>
      </div>
      <ProfileSettingsInput label="ユーザー名" value={newName} onChange={onChangeUserName} />
      <ProfileSettingsInput label="自己紹介" value={bio} onChange={onChangeBio} />
      <ProfileSettingsInput label="Discord ID" value={discordId} onChange={onChangeDiscordId} />
      <ProfileSettingsInput label="ウェブサイト" value={website} onChange={onChangeWebsite} />
      <div className={styles.onSubmitContainer}>
        <input type="submit" value={'変更する'} onClick={onSubmit} className={styles.changeProfileButton} />
      </div>
    </div>
  )
})
