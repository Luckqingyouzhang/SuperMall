<template>
  <div class='ShopNowPrice'>
    <ul>
      <li>价格明细</li>
      <li>商品总价    <p>共{{CardLen}}件宝贝</p>
        <span>￥{{ShopPrice}}</span>
      </li>
      <li>邮费<span>￥{{PostPrices}}.00</span></li>
      <li><i></i>官方立减<span>￥{{OffSubPrice}}</span></li>
      <li>合计<span>￥{{ClearPrice}}</span></li>

    </ul>

  </div>
</template>

<script>

export default {
  name: 'ShopNowPrice',
  components: {},
  data () {
    return {
      CountPrice: 0,   // 商品价格 
      PostPrices: 6,   // 快递邮费 
      OffSubPrice: 1.68,  // 官方的优惠减价 
      ParseSum: null    // 最后的商品总价 

    };
  },
  methods: {

  },
  activated () {
    console.log(111);
    /*将当前确认订单 页面 
    计算一些复杂条件的计算完成的总价数据 赋值给 Vuex状态管理器的字段 
    
    */
    this.$store.state.CheckCountPrice = this.ClearPrice
  },
  computed: {
    CardLen () {
      return this.$store.state.CartList.length
    },
    ShopPrice () {
      return this.CountPrice = this.$store.state.CartList.reduce((Sum, item) => Sum += (item.Price*10  * item.count)/10, 0).toFixed(2)
    },
    ClearPrice () {
      if (this.CardLen !== 0) {
        this.ParseSum = (this.CountPrice*10)/10+ this.PostPrices - this.OffSubPrice
        return this.ParseSum.toFixed(2)
      }
      else {
        return 0
      }
    }
  }
}
</script>

<style scoped>
.ShopNowPrice {
  width: 97%;
  padding: 0 18px;
  margin: 0 auto;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 5px;
  background-color: #fff;
}
.ShopNowPrice ul li {
  font-size: 15px;
  height: 40px;
  width: 100%;
  overflow: hidden;
  line-height: 40px;
  color: rgb(32, 32, 32);
}
.ShopNowPrice ul li:first-child {
  font-weight: 600;
}
.ShopNowPrice i {
  display: inline-block;
  width: 15px;
  padding: 13px;
  vertical-align: middle;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url(../../../assets/img/check/Official.svg);
}
.ShopNowPrice p {
  display: inline-block;
  color: #c5c3c3;
  font-size: 13px;
}
.ShopNowPrice span {
  float: right;
  font-weight: 550;
  color: #d81e06;
  font-size: 14px;
}
</style>