export type AuthError =
  | 'auth/email-already-in-use'
  | 'auth/invalid-email'
  | 'auth/weak-password'
  | 'auth/user-disabled'
  | 'auth/user-not-found'
  | 'auth/wrong-password'
