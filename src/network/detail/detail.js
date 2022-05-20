import { request } from "../request";

export function getCommodityDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}


export function getrecommend () {
  return request({
    url: '/recommend'
  })
}