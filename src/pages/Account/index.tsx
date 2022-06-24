import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import AccountPageContainer from 'components/organisms/Containers/AccountPageContainer'
import AccountPostContentList from 'components/organisms/ListItems/AccountPostContentList'
import ProfileContainer from 'components/organisms/Containers/ProfileContainer/Account'
import RecommendationContent from 'components/organisms/ListItems/RecommendationContent'
import React, { useEffect } from 'react'
import { AlertProvider } from 'components/molecules/Alert'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'
import { useNavigate, useParams } from 'react-router-dom'

export default React.memo(function AccoutScreen() {
  const params = useParams()
  const navigate = useNavigate()
  const f = async () => {
    const userRef = doc(db, 'users', params.uid!)
    const userSnap = await getDoc(userRef)
    if (!userSnap.data()) {
      navigate('/account/not-found')
    }
  }

  useEffect(() => {
    f()
  }, [])

  window.scroll({ top: 0 })
  return (
    <AlertProvider>
      <SafeView>
        <ScreenLabel />
        <AccountPageContainer
          left={<ProfileContainer />}
          center={<AccountPostContentList />}
          right={<RecommendationContent />}
        />
      </SafeView>
    </AlertProvider>
  )
})
