<template>
  <div class='ShopCartGoodsList'>
    <cart-goods-list-item v-for="(item,index) in ShopCart"
                          :key="index"
                          :ListItem='item'
                          @DelGoods='delCartGoods'></cart-goods-list-item>
  </div>
</template>

<script>

import CartGoodsListItem from './CartGoodsListItem.vue'
import { getLocalStorageData, getLocalStorageDataLen } from '@/LocalStoragedata/LocalStorageData'


export default {
  name: 'ShopCartGoodsList',

  components: { CartGoodsListItem },



  created () {
    /// 初始化 购物车状态
    this.StartgetlocalStorageData()

  },
  activated () {
      console.log(this.ShopCart);
    if (this.$store.state.CartList.length === 0) {
      this.$toast('购物车暂无商品');
    }
    else {
      this.AddGoodsCart()
    }
  },

  data () {
    return {
      ShopCart: []
    };
  },
  methods: {
    //删除购物车中的商品
    delCartGoods (GoodsID) {
      /**
       * 找到 购物车中和当前ID相同的 商品 返回index 
       *  
       */
      const CartIndex = this.$store.state.CartList.findIndex(item => item.ShopCartGoodsID === GoodsID)
      /**
       * 对购物车数组 删除 数据 
       * 
       */
      this.$store.state.CartList.splice(CartIndex, 1)

      // 对 删除完成之后  购物车数据 重新 存到本地 
      localStorage.setItem("CartList", JSON.stringify(this.$store.state.CartList))

      // 对 删除完成之后  购物车数据 重新 取到this.$store.state.CartList
      this.$store.state.CartList = getLocalStorageData()

      // 删除完成后重新赋值  数据 
      this.StartgetlocalStorageData()

    },

    /**初始化 购物车数据 从本地取数据 存到 购物车  */
    StartgetlocalStorageData () {
      this.ShopCart = this.$store.state.CartList
      // console.log(this.ShopCart);
    },
    /***初始化成功进行 判断 如果本地数据数组长度相等 则提示数据相同  否则 清空之前数组数据 将现有的数据进行存储渲染 */
    AddGoodsCart () {
      const CurrentCartLen = this.ShopCart.length
      const localStorageLen = getLocalStorageDataLen()
      /****
       * 利用数组长度对齐进行判断 如果 当前this.ShopCart 数据的长度 等于  本地的购物车的长度 则不进行任何操作 
       * 如果 当前 本地数据 数据长度 不等于 this.ShopCart 则清空之前数据 将他重新push 进   this.shopcart 数组 
       * 
       */
      if (CurrentCartLen === localStorageLen) {
        // console.log("两数组数据相同");
      }
      else {
        // console.log("数据更新");
        this.ShopCart.splice(0, CurrentCartLen)
        this.ShopCart.push(...JSON.parse(localStorage.getItem('CartList')))
      }
    }

  },
}
</script>

<style scoped>
.ShopCartGoodsList {
  margin: 0px 5px;
}
</style>