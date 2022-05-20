import Vue from 'vue'
import vuex from 'vuex'
import mutations from './Mutations/mutations'
import actions from './Actions/actions'
import getters from './Getters/getters'
// 1 安装插件
Vue.use(vuex);
const store = new vuex.Store({
  state: {
    // 商城 用户信息
    Userlist: [],
    token: '',

    //// 确认订单页面 最终支付 总价格
    CheckCountPrice: 0,
    CartList: [],  // Vuex 全局所有变量 均存在 state 中
    // 添加收货地址信息 数组存储数据 
    AddressInfo: [
      {
        name: '',
        Phone: null,
        Address: '',
        detailAddressInfo: '',
        isdefault: null
      }
    ]
  },
  mutations,
  actions,
  getters,
})

export default store