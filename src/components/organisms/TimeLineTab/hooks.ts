import { useCallback, useState } from 'react'
import { TabButtonTypes } from 'types/TabButtonTypes'

export function useInjection() {
  const [isChecked, setIsChecked] = useState<TabButtonTypes>('All')

  const onClick = useCallback((type: TabButtonTypes) => {
    setIsChecked(type)
  }, [])

  return {
    onClick,
    isChecked,
  }
}
