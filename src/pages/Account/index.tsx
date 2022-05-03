import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import { RootState } from 'components/redux'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default React.memo(function AccoutScreen() {
  const { username } = useSelector(({ user }: RootState) => user)
  const [label, setLabel] = useState<string>(username)

  useEffect(() => {
    if (!username) {
      setLabel('匿名さん')
    }
  }, [username])

  return (
    <SafeView>
      <ScreenLabel label={label} />
    </SafeView>
  )
})
