import { useCheckedMap } from 'components/contexts'
import { RootState } from 'components/redux'
import { actions } from 'components/redux/Search'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useInjection() {
  const dispatch = useDispatch()
  const [platformChecks, platformCheckedIds, setPlatformChecked] = useCheckedMap()
  const [playStyleChecks, playStyleCheckedIds, setPlayStyleChecked] = useCheckedMap()
  const [genderChecks, genderCheckedIds, setGenderChecked] = useCheckedMap()
  const { searchState } = useSelector(({ search }: RootState) => search)

  // ローカルステートにチェックされている検索条件があれば初期値を設定
  useEffect(() => {
    // プレイ環境
    let platformMap: { [key: number]: boolean } = {}
    searchState.platforms?.forEach(id => (platformMap[id] = true))
    setPlatformChecked(platformMap)

    // プレイスタイル
    let playStyleMap: { [key: number]: boolean } = {}
    searchState.playStyles?.forEach(id => (playStyleMap[id] = true))
    setPlayStyleChecked(playStyleMap)

    // 性別
    let genderMap: { [key: number]: boolean } = {}
    searchState.genders?.forEach(id => (genderMap[id] = true))
    setGenderChecked(genderMap)
  }, [])

  // 検索するボタン
  const onSubmit = () => {
    dispatch(
      actions.setSearchState({
        platforms: platformCheckedIds,
        playStyles: playStyleCheckedIds,
        genders: genderCheckedIds,
      }),
    )
  }

  return {
    platformChecks,
    platformCheckedIds,
    setPlatformChecked,

    playStyleChecks,
    playStyleCheckedIds,
    setPlayStyleChecked,

    genderChecks,
    genderCheckedIds,
    setGenderChecked,

    onSubmit,
  }
}
