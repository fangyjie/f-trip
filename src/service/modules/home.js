import fRequest from '../request'

export function getHotSuggests() {
  return fRequest.get({
    url: '/home/hotSuggests'
  })
}

export function getCategories() {
  return fRequest.get({
    url: '/home/categories'
  })
}

export function getHouseList(page) {
  return fRequest.get({
    url: '/home/houselist',
    params: {
      page: page
    }
  })
}
