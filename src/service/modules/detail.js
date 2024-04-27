import fRequest from '../request'

export function getHouseDetail(id) {
  return fRequest.get({
    url: '/detail/infos',
    params: {
      houseId: id
    }
  })
}
