import { DocumentData } from 'firebase/firestore'

export const ActionTypes = {
  SET_ACCOUNT_POSTS: 'ACCOUNT_POSTS/SET_POSTS',
} as const

export const setPosts = (posts: DocumentData[]) => {
  return { type: ActionTypes.SET_ACCOUNT_POSTS, payload: posts }
}
