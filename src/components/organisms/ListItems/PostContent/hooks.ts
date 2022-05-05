import { useCallback } from 'react'
// import { useNavigate } from 'react-router-dom'

export function useInjection() {
  //   const navigate = useNavigate()
  const onClickPost = useCallback(() => {
    //     navigate(`/post/${post.id}`)
    alert('post clicked!')
  }, [])

  return {
    onClickPost,
  }
}
