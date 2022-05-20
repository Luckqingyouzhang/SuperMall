<template>
  <div class="CheckGoods">
    <div class="goodsItem"
         :class="{ ActiveVant: ShowVant }"
         ref="ItemBox">
      <van-card :num="item.count"
                :price="item.Price"
                :desc="item.desc"
                :title="item.title"
                :thumb="item.image"
                v-for="(item, index) in VuexCartListContent"
                :key="index"
                class="VantShop" />
    </div>
    <div class="ShowVant"
         v-show="
        VuexCartListContentLength === 1 || VuexCartListContentLength === 0? false: true">
      <i ref="ShowControl"
         class="ShowShopItem"
         @click="ShowVantCommPent"
         :style="ShowVant ? setBackground : getBackground"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckGoods",

  data () {
    return {
      ShowVant: false,
      setBackground: {
        backgroundImage:
          "url(" + require("../../../assets/img/check/up.png") + ")"
      },
      getBackground: {
        backgroundImage:
          "url(" + require("../../../assets/img/check/Updown.png") + ")"
      }
    };
  },
  updated () {
    this.$emit('GoodsHeightFinish');
  },
  methods: {

    ShowVantCommPent () {

      // console.log(this);
    !this.ShowVant? this.ShowVant = true:this.ShowVant = false;
 
    },
  },
  computed: {
    VuexCartListContent () {
      return this.$store.state.CartList.filter(item => item.ShopStatus);
    },
    VuexCartListContentLength () {
      return this.$store.state.CartList.length;
    }
  }
};
</script>

<style scoped>
.goodsItem {
  /***
  最外层父盒子  
  */
  min-height: 100px;
  height: 121px;

  width: 97%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
}
.van-card {
  /***
  vant 组件设置样式
  */
  margin-top: 0;
  background-color: #fff;
}
.van-card__title {
  /**
    vant 组件设置样式
  */
  font-size: 14px;
  max-height: 16px;
  max-width: 200px;
}
.van-card__price {
  color: rgb(255, 0, 0);
  font-weight: 600;
}
.ShowVant {
  width: 97%;
  box-shadow: 10px -30px 5px rgba(255, 255, 255, 0.8);
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  opacity: 0.9;
}
.ShowShopItem {
  position: relative;
  top: -25px;
  display: block;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  background-position: center center;
  background-size: 100% 100%;
}
.ActiveVant {
  height: 100%;
}
</style>
