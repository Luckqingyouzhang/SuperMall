<template>
  <div class='DetailShopinfo'
       v-if="Object.keys(ShopData).length !== 0">
    <div class="ShopMaininfo">
      <img :src="ShopData.logo"
           alt="">
      <span>{{ShopData.name}}
      </span>
      <p><span>综合体验:</span>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <div class="Official-Logo">购物街<br></div>

    </div>

    <div class="Shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ShopData.sells|sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ShopData.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right ">
        <table>
          <tr v-for="(item, index) in ShopData.score"
              :key="index">
            <td>{{item.name}}</td>
            <td class="score "
                :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better"
                :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
      <div class="enter-shop">查看更多</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailShopinfo',
  components: {},
  props: {
    ShopData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    };
  },
  methods: {

  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
.DetailShopinfo {
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  margin: 10px auto 0px;
  width: 95%;
  padding: 20px 10px;
}
.ShopMaininfo {
  display: flex;
  position: relative;
  font-size: 18px;
  /* 让元素垂直中心对齐 */
  align-items: center;
}
.ShopMaininfo img {
  width: 60px;
  height: 60px;
  border: 1px solid#8b8b8b;
  border-radius: 50%;
}
.ShopMaininfo span {
  color: black;
  line-height: 20px;
  margin-left: 10px;
}
.Official-Logo {
  margin-left: 5px;
  line-height: 20px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  background-color: #ea3339;
}
.ShopMaininfo p {
  position: absolute;
  top: 45px;
  left: 60px;
  font-size: 14px;
  color: red;
  line-height: 15px;
}
.Shop-middle {
  display: flex;
  margin-top: 10px;
  align-items: center;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sells-count,
.goods-count {
  font-size: 18px;
}
.sells-text,
.goods-text {
  margin-top: 10px;
}
.shop-middle-right {
  display: flex;
  justify-content: center;
  color: #333;
}
.shop-middle-right table td {
  padding: 5px 0;
  font-size: 14px;
}
.score {
  display: block;
  margin-left: 15px;
  margin-right: 15px;
  color: rgb(11, 165, 11);
}
.better span {
  background-color: rgb(11, 165, 11);
  color: #fff;
}
.score-better {
  color: red;
}
.better-more span {
  color: #fff;
  background-color: red;
}

.shop-bottom {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  width: 150px;
  height: 30px;
  color: #ff5902;
  border: 1px solid #ff5902;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>