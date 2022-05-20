<template>
  <div class='DetailBottomBar'>

    <div class="DetailLeftModel">
      <div>
        <span class="icon Services"></span>
        <div class="Detail-Services-Model-Size">客服</div>
      </div>
      <div>
        <span class="icon shop"></span>
        <div class="Detail-Services-Model-Size">店铺</div>
      </div>
      <div @click="inSelect">
        <span class="icon select"
              ref="inSelect"></span>
        <div class="Detail-Services-Model-Size"
             ref="SelectFont">{{isSelectValue}}</div>
      </div>

    </div>
    <div class="DetailRightModel">
      <div class="inCart"
           @click="launchAddShopCart()">加入购物车</div>
      <div class="Purchase">立即购买</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailBottomBar',
  components: {},
  data () {
    return {
      isinSelect: false,
      isSelectValue: "收藏",
      NowShopid: null

    };
  },
  methods: {
    inSelect () {
      if (this.isinSelect === false) {
        this.$refs.inSelect.style.backgroundPosition = '0 -177px'
        this.isinSelect = true
        this.isSelectValue = '已收藏'
      }
      else {
        this.$refs.inSelect.style.backgroundPosition = '0 -150px'
        this.isinSelect = false
        this.isSelectValue = '收藏'
      }

    },
    launchAddShopCart () {
      this.NowShopid = this.$route.query.iid
      this.$emit("launchAddShopCart_Click", this.NowShopid)
      if (this.NowShopid) {

      }
    }
  },
}
</script>

<style scoped>
.DetailBottomBar {
  text-align: center;
  width: 100%;
  height: 49px;
  position: absolute; /*此处用fixed  和 absolute  均可  */
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  border-radius: 5px;
  background-color: #fff;
}
.DetailLeftModel {
  flex: 1;
  display: flex;
  width: 50%;
  height: 49px;
}
.DetailRightModel {
  flex: 1;
  display: flex;
  width: 50%;
  height: 49px;
}
.DetailLeftModel > div {
  flex: 1;
}
.DetailRightModel > div {
  height: 35px;
  line-height: 30px;
  color: white;
  font-size: 15px;
  margin: auto;
  flex: 1;
}
.icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto;
  background-image: url("../../../assets/img/detail/detail_bottom.png");
}
.Services {
  background-position: 0 -54px;
  background-size: 22px, 22px;
}
.shop {
  background-position: 0 -98px;
  background-size: 22px, 22px;
}
.select {
  background-position: 0 -150px;
  background-size: 22px, 22px;
}
.Detail-Services-Model-Size {
  font-size: 13px;
  color: black;
}
.inCart {
  background-color: #f99a21;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.Purchase {
  background-color: #f95822;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
.JoinCart {
  position: absolute;
  color: #000;
  top: 50%;
  left: 50%;
}
</style>