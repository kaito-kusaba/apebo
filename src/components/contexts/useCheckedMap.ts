import { useState, useEffect, useCallback } from 'react'

export type CheckedMap = {
  [key: number]: boolean
}

export const useCheckedMap = (init?: CheckedMap): [CheckedMap, number[], (checkedMap: CheckedMap) => void] => {
  const [state, setState] = useState<CheckedMap>(init || {})
  const [checkedIds, setCheckedIds] = useState<number[]>([])

  const setChecked = useCallback(
    (checkedMap: CheckedMap) => {
      setState(prev => ({ ...prev, ...checkedMap }))
    },
    [setState],
  )

  useEffect(() => {
    const ids: number[] = []
    Object.keys(state).forEach(key => {
      if (state[Number(key)]) {
        ids.push(Number(key))
      }
    })
    setCheckedIds(ids)
  }, [state])

  return [state, checkedIds, setChecked]
}
