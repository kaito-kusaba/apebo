import React from 'react'
import { useStyles } from './style'
import SearchPlatformsButtonList from 'components/organisms/ListItems/SearchPlatformsButtonList'
import { useInjection } from './hooks'
import SearchButtonLabel from 'components/molecules/Label/SearchButtonLabel'
import SearchPlayStylesButtonList from 'components/organisms/ListItems/SearchPlayStylesButtonList'
import SearchGendersButtonList from 'components/organisms/ListItems/SearchGendersButtonList'
import SearchButton from 'components/organisms/Button/SearchButton'
import SearchLabel from 'components/molecules/Label/SearchLabel'

export default React.memo(function TopSearchContainer() {
  const styles = useStyles()
  const { platformChecks, setPlatformChecked, playStyleChecks, setPlayStyleChecked, genderChecks, setGenderChecked } =
    useInjection()

  return (
    <div className={styles.container}>
      <SearchLabel label="検索" />
      <div className={styles.searchButtonsListContainer}>
        <SearchButtonLabel label="プレイ環境" onChange={() => {}} />
        <SearchPlatformsButtonList checks={platformChecks} setChecked={setPlatformChecked} />
        <SearchButtonLabel label="プレイスタイル" onChange={() => {}} />
        <SearchPlayStylesButtonList checks={playStyleChecks} setChecked={setPlayStyleChecked} />
        <SearchButtonLabel label="性別" onChange={() => {}} />
        <SearchGendersButtonList checks={genderChecks} setChecked={setGenderChecked} />
        <div className={styles.searchButtonContainer}>
          <SearchButton />
        </div>
      </div>
    </div>
  )
})
