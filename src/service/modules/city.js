import fRequest from '../request'

export function getCityAll() {
  return fRequest.get({
    url: '/city/all'
  })
}
