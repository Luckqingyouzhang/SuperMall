import {
  ADDCOUNTER, ADDTOCART, ADDLOCALSTORAGEDATA, ADDLOCALUSERDATA
} from './mutations-types'

import { getLocalStorageData, getLocalStorageUserData } from '../../LocalStoragedata/LocalStorageData'


export default {
  /**
     * 方法分发  addCounter 对 Count 数量进行增加 
     * 
     * addToCart 对购物商品进行添加  
     * 
    */
  [ADDLOCALSTORAGEDATA] (state) {
    state.CartList = getLocalStorageData()
  },

  [ADDLOCALUSERDATA] (state) {
    state.Userlist = getLocalStorageUserData();
  },

  [ADDCOUNTER] (state, payload) {
    payload.count++
    localStorage.setItem("CartList", JSON.stringify(payload))

  },

  [ADDTOCART] (state, payload) {
    state.CartList.push(payload)
    localStorage.setItem('CartList', JSON.stringify(state.CartList))
    // console.log(JSON.parse(localStorage.getItem('CartList')));
  }
}