import firebase from 'firebase/auth'

export type User = firebase.User

export type UserData = {
  username?: string
  icon?: string
  uniqueId?: string
  discordId?: string
  website?: string
  bio?: string
  follows?: string[]
  followers?: string[]
  platforms?: number[]
}
