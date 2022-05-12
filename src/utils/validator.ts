import { ValidationType } from 'types/ValidationType'

const Pattern = {
  emoji:
    /[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/,
  password: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*()-_+=|}\]{["':;?/]{6,}$/,
}

export const isValidName = (value: string) => {
  return !Pattern.emoji.test(value)
}

export const validatePassword = (value: string): ValidationType => {
  if (!value) return 'blank'
  if (Pattern.password.test(value)) {
    return 'valid'
  } else {
    return 'invalid'
  }
}
