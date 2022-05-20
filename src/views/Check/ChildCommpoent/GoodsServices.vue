<template>
  <div class="GoodsServices">
    <ul>
      <li>配送<span>60分钟内付款，预计今晚发货</span></li>
      <li>
        无接触配送<span>点击可指定代收点<i></i></span>
      </li>
      <li>运费险<span>未选择,请关注各个商店的配置表<i></i></span></li>
      <li>我的优惠券<span @click="PlaceCouPon">请选择<i></i></span></li>
      <li>支付方式<span>请选择<i></i></span></li>
      <li>开具发票<span>请选择<i></i></span></li>
    </ul>
    <!-- <coupon-model v-show="ShowCoupon"></coupon-model> -->
  </div>
</template>

<script>
// import CouponModel from '../../../components/common/Coupon/CouponModel.vue';
export default {
  name: "GoodsServices",
  components: {},
  data () {
    return {
      ShowCoupon: false
    };
  },
  methods: {
    PlaceCouPon () {
      this.ShowCoupon = true
    }
  }
};
</script>

<style scoped>
.GoodsServices {
  width: 97%;
  padding: 0 18px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fff;
}
.GoodsServices ul li {
  font-size: 14px;
  height: 40px;
  width: 100%;
  overflow: hidden;
  line-height: 40px;
  color: rgb(0, 0, 0);
}
.GoodsServices ul li span {
  float: right;
  color: #c5c3c3;
  font-size: 13px;
}
.GoodsServices ul li:nth-child(1) span {
  color: #007bff;
  font-size: 12px;
}
.GoodsServices i {
  display: inline-block;
  width: 15px;
  padding: 15px;
  vertical-align: middle;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url(../../../assets/img/check/ServiceRight.svg);
}
</style>
