<template>
  <div class="CheckIndex">
    <navbar class="CheckNav">
      <div slot="left"
           class="SitaBack"
           @click="SitaBack()">
        <img src="~Pro/img/detail/Back.png"
             alt="返回" />
      </div>
      <div slot="center"
           style="color:#000">确认订单</div>

      <div slot="right">
        <img src="~Pro/img/check/Share.png"
             alt="分享" />
      </div>
    </navbar>

    <!-- 显示收货地址信息组件 -->
    <check-site @click.native="ShowAddSita()"></check-site>

    <!-- 收获地址 组件 添加收货信息   -->
    <add-siat-item ref="AddSita"></add-siat-item>

    <!-- 确认商品信息 并结算 组件页面 -->

    <scroll class="content"
            ref="CheckScroll">
      <!-- 参与滚动的组件 商品服务模块 商品价格模块 -->
      <check-goods @GoodsHeightFinish='CheckItemRefresh'></check-goods>
      <goods-services></goods-services>
      <shop-now-price></shop-now-price>
    </scroll>
    <bottom-bar>
      <div slot="center"
           style="text-align: right;">
        <span>合计: <span class="CountPrice">￥{{ConfigCheckCountPrice}}</span></span>
      </div>
      <div slot="right">
        <button class="Bottom-btn">提交订单</button>
      </div>
    </bottom-bar>
  </div>
</template>

<script>
import Navbar from "../../components/common/Navbar/NavBar.vue";
import scroll from "../../components/common/Scroll/scroll.vue";
import BottomBar from '../../components/common/BottomBar/BottomBar.vue'
import Bottom from '../../components/common/BottomBar/Bottombutton.vue'


import CheckSite from "./ChildCommpoent/CheckSite.vue";
import SiatInfo from "../../components/common/SiatInfo/SiatInfo.vue";
import AddSiatItem from "./ChildCommpoent/CheckAddSitaItem.vue";
import CheckGoods from "./ChildCommpoent/CheckGoods.vue";
import GoodsServices from "./ChildCommpoent/GoodsServices.vue";
import ShopNowPrice from './ChildCommpoent/ShopNowPrice.vue'

export default {
  name: "CheckIndex",
  components: {
    Navbar,
    scroll,
    Bottom,
    BottomBar,
    CheckSite,
    SiatInfo,
    AddSiatItem,
    CheckGoods,
    GoodsServices,
    ShopNowPrice,

  },
  data () {
    return {
    };
  },
  mounted () {
    // this.$refs.CheckScroll.refresh()
    // this.$refs.CheckScroll.refresh()
    console.log(this.$store.state.CheckCountPrice);
  },
  methods: {
    SitaBack () {
      this.$router.back();
    },
    ShowAddSita () {
      this.$refs.AddSita.isShowPage = true;
    },
    CheckItemRefresh () {
      this.$refs.CheckScroll.refresh()
    }
  },
  activated () {
    // console.log(this.$refs.CheckScroll.scroll.y);
    this.$refs.CheckScroll.refresh()
  },
  computed: {
    /**
     * 从Vuex 状态管理库中 取得 订单总价信息 
     * 
     */
    ConfigCheckCountPrice () {
      return this.$store.state.CheckCountPrice
    }
  },

};
</script>

<style scoped>
/***
确认订单 主页面 
*/
.CheckIndex {
  position: relative;
  height: 100vh;
  z-index: 12;
  background-color: #f1f1f1;
}
/***
确认订单  头部导航
*/
.CheckNav {
  position: fixed;
  width: 100%;
  z-index: 9;
  background-color: #ffffff;
}
/**
确认订单 scroll 组件 CSS 
*/
.content {
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
  touch-action: none;
}
/***
确认订单 主页 左上角返回 控件
*/
.SitaBack {
  width: 100%;
  height: 100%;
}
.CheckNav img {
  margin-top: 7.5px;
  margin-left: 20px;
  width: 25px;
  height: 25px;
}
.CountPrice {
  color: #ef0e25;
  /* font-weight: 550; */
}
.Bottom-btn {
  width: 100px;
  height: 40px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  border-radius: 20px;
  background-image: linear-gradient(to right, #ff9f84, #ef0e25);
}
</style>
