import UserIcon from 'components/atoms/UserIcon'
import SettingsLabel from 'components/molecules/Label/SettingsLabel'
import React from 'react'
import { useInjection } from './hooks'
import { useStyles } from './style'
import ProfileSettingsInput from 'components/organisms/ProfileSettingsInput'
import PlatformsContentList from '../ListItems/PlatformsContentList'
import { useCheckedMap } from 'components/contexts'
import PlaystyleContainer from '../PlaystyleContainer'
import GenderContainer from '../GenderContainer'

export default React.memo(function UpdateProfileScreen() {
  const [platformChecks, platformCheckedIds, setPlatformChecked] = useCheckedMap()
  const [playStyleChecks, playStyleCheckedIds, setPlayStyleChecked] = useCheckedMap()
  const [genderChecks, genderCheckedIds, setGenderChecked] = useCheckedMap()

  const {
    user,
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
    disabled,
  } = useInjection({ platformCheckedIds, playStyleCheckedIds, genderCheckedIds })
  const styles = useStyles({ disabled })
  return (
    <div className={styles.container}>
      <SettingsLabel label="プロフィール" />
      <div className={styles.avatar}>
        <h3 className={styles.inputLabel}>アバター</h3>
        <span className={styles.buttonStyle}>
          <button onClick={onChangeAvater} className={styles.avatarChangeImg}>
            <UserIcon uid={user!.uid} size={72} disabled />
          </button>
          <button className={styles.avatarChange} onClick={onChangeAvater}>
            アバター画像を変更
          </button>
          <button className={styles.avatarDelete} onClick={onChangeDelete}>
            アバター画像を削除
          </button>
        </span>
      </div>
      <ProfileSettingsInput
        label="ユーザー名"
        value={newName}
        onChange={onChangeUserName}
        maxLength={20}
        errorMessage="ユーザー名を入力してください"
      />
      <ProfileSettingsInput label="自己紹介" value={bio} onChange={onChangeBio} maxLength={160} textarea />
      <ProfileSettingsInput label="Discord ID" value={discordId} onChange={onChangeDiscordId} maxLength={40} />
      <ProfileSettingsInput
        label="ウェブサイト"
        value={website}
        onChange={onChangeWebsite}
        maxLength={100}
        placeholder="https://example.com"
      />
      <p className={styles.platformLabel}>プレイ環境</p>
      <PlatformsContentList checks={platformChecks} setChecked={setPlatformChecked} />
      <PlaystyleContainer checks={playStyleChecks} setChecked={setPlayStyleChecked} />
      <GenderContainer checks={genderChecks} setChecked={setGenderChecked} />
      <div className={styles.onSubmitContainer}>
        <input
          type="submit"
          value={'変更する'}
          onClick={onSubmit}
          className={styles.changeProfileButton()}
          disabled={disabled}
        />
      </div>
    </div>
  )
})
