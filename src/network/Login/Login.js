import { LoginRequest } from './LoginRequest'

export function getLoginData (username, password) {
  return LoginRequest({
    url: '/login',
    data: {
      username,
      password
    }

  })
}
export function getRegisterData (username, password) {
  return LoginRequest({
    url: '/register',
    data: {
      username,
      password
    }

  })
}
