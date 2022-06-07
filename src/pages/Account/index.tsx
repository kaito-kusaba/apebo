import SafeView from 'components/atoms/SafeView'
import ScreenLabel from 'components/molecules/Label/ScreenLabel'
import AccountPageContainer from 'components/organisms/AccountPageContainer'
import AccountPostContentList from 'components/organisms/ListItems/AccountPostContentList'
import ProfileContainer from 'components/organisms/ProfileContainer'
import RecommendationContent from 'components/organisms/ListItems/RecommendationContent'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'libs/firebase'

export default React.memo(function AccoutScreen() {
  const navigate = useNavigate()
  const params = useParams()

  const checkUserData = async () => {
    const userRef = doc(db, 'users', params.uid!)
    const userSnap = await getDoc(userRef)
    if (!userSnap.data()?.uid.include(params.uid)) {
      navigate('/account/notfound')
    }
  }

  useEffect(() => {
    checkUserData()
  })

  return (
    <SafeView>
      <ScreenLabel />
      <AccountPageContainer
        left={<ProfileContainer />}
        center={<AccountPostContentList />}
        right={<RecommendationContent />}
      />
    </SafeView>
  )
})
