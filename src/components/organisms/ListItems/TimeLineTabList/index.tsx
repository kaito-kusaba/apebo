import TimeLineTab from 'components/organisms/TimeLineTab'
import React from 'react'

export default React.memo(function TimeLineSelect() {
  // useEffect(() => {
  //   switch (location.pathname) {
  //     case '/':
  //       setIsSelected('All')
  //       setAllImageSrc(WorldIconYellow)
  //       break
  //     case '/following':
  //       setIsSelected('Following')
  //       setFollowingImageSrc(FollowingIconYellow)
  //       break
  //     case '/star':
  //       setIsSelected('Star')
  //       setStarImageSrc(StarIconYellow)
  //       break
  //   }
  // }, [location.pathname])

  return (
    <>
      <TimeLineTab />
    </>
  )
})
