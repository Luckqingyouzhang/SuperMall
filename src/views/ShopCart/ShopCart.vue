<template>
  <div id='shopcart'>
    <nav-bar class="shopcart-nav">
      <div slot="center">购物车({{VuexCartListLength}})</div>
    </nav-bar>

    <scroll class="content"
            ref="CartScroll">
      <shop-cart-goods-list></shop-cart-goods-list>
    </scroll>
    <shop-cart-footer :FooterData='this.$store.state.CartList'></shop-cart-footer>
  </div>

</template>

<script>
import NavBar from '../../components/common/Navbar/NavBar.vue'
import Scroll from '../../components/common/Scroll/scroll.vue';

import ShopCartGoodsList from './Childcomps/ShopCartGoodsList.vue';
import ShopCartFooter from './Childcomps/ShopCartFooter.vue'
// import ShopCartGoodsList from './Childcomps/ShopCartGoodsList.vue'
export default {
  name: "shopcart",
  components: { NavBar, Scroll, ShopCartGoodsList, ShopCartFooter },
  data () {
    return {

    };
  },
  computed: {
    VuexCartList () {
      return 
    },
    VuexCartListLength () {
      return this.$store.state.CartList.length

    },
  },
  watch: {},
  methods: {

  },
  activated () {
    this.$refs.CartScroll.refresh()
  }
}
</script>

<style scoped>
#shopcart {
  height: 100vh;
  position: relative;
  background-color: rgb(246, 246, 246);
}
.shopcart-nav {
  position: fixed;
  width: 100%;
  z-index: 9;
  /* background-color: #1683ff; */
  background-image: linear-gradient(to right, #4486f7, #62edff);
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>