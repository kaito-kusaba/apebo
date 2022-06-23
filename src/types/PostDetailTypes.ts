import { Timestamp } from 'firebase/firestore'

export type PostDetailTypes = {
  docId: string
  uid: string
  content: string
  time: Timestamp
}
