import { useInjection } from './hooks'
import React from 'react'
import CharacterCounter from 'components/molecules/Counter'
import PlatformsContentList from '../ListItems/PlatformsContentList'
import { useStyles } from './style'
import { useCheckedMap } from 'components/contexts'

export default function SetUsernameContainer() {
  const [checks, checkedIds, setChecked] = useCheckedMap()
  const { name, onChangeName, onClickSubmit, maxLen, disabled } = useInjection({ checkedIds })
  const styles = useStyles({ disabled })

  return (
    <div className={styles.container}>
      <h1 className={styles.top}>プロフィール設定</h1>
      <div className={styles.labelContainer}>
        <div className={styles.flexbox}>
          <h2 className={styles.label}>ユーザー名（必須）</h2>
          <span className={styles.info}>※設定で変更できます</span>
        </div>
        <CharacterCounter length={name.length} maxLength={maxLen} />
      </div>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={onChangeName}
        maxLength={maxLen}
        placeholder="ユーザー名を入力してください"
      />
      <div className={styles.labelContainer}>
        <div className={styles.flexbox}>
          <h2 className={styles.label}>プレイ環境</h2>
          <span className={styles.info}>※設定で変更できます</span>
        </div>
      </div>
      <PlatformsContentList checks={checks} setChecked={setChecked} />
      <input type="submit" value="はじめよう" disabled={disabled} onClick={onClickSubmit} className={styles.submit()} />
    </div>
  )
}
