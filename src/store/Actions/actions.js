import {
  ADDTOCART, ADDCOUNTER
} from '../Mutations/mutations-types'
export default {
  //对全局变量进行操作 
  addCart (context, payload) {
    let OldProduct = context.state.CartList.find(item => item.ShopCartGoodsID === payload.ShopCartGoodsID)
    // for (let item of state.CartList) {
    //   if (item.ShopCartGoodsID === payload.ShopCartGoodsID) {
    //     OldProduct = item
    //   }
    // }
    // localStorage.setItem('CartList', context.state.CartList.push(...payload))

    if (OldProduct) {

      /***
       * 在actions 里 提交 addCounter 方法 并将 OldProduct 对象 数据 传递到 mutations addCounter 方法中 (mutations 中可跟踪数据的变化)
       */
      context.commit(ADDCOUNTER, OldProduct)

    } else {
      payload.count = 1
      context.commit(ADDTOCART, payload)
      // }
    }
  },

  // 组件一创建 时 将本地的购物车数据 添加到 Vuex状态管理库中
  addCartLocalData (context, payload) {
    context.commit("AddLocalStorageData")
  },

  /// 组件一创建 时 将本地的用户数据 添加到 Vuex状态管理库中Userlisthis.$attrs
  addUserListLocalData (context, payload) {
    context.commit('AddLocalUserData')
  }

}