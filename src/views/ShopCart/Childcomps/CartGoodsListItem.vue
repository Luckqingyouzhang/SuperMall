<template>
  <!-- <div class='goodsListItem'>
    <div class="CartGoodsLeft">
      <input type="checkbox"
             name="ShopCartCheck"
             v-model="ListItem.ShopStatus"
             :id="GetShopid">
      <label :for="GetShopid">
        <img :src="image"
             alt="">
      </label>
    </div>
    <div class="CartGoodsRight">
      <p>{{title}}
      </p>
      <span class="CartDesc">{{desc}}
      </span>
      <span class="CartPrice">￥{{Price}}
      </span>
            <span class="CartCount">
        <cart-list-count :CartListData='ListItem'></cart-list-count>
      </span>
      <span class="CartCount">
        <cart-list-count :CartListData='ListItem'></cart-list-count>
      </span>
    </div>
  </div> -->
  <div class="goodsListItem">

    <van-swipe-cell>
      <van-card :num="ListItem.count"
                :price="Price"
                :desc="desc"
                :title="title"
                class="goods-card"
                :thumb="image">
      </van-card>

      <label :for="GetShopid">
        <input type="checkbox"
               name="ShopCartCheck"
               v-model="ListItem.ShopStatus"
               :id="GetShopid">
      </label>

      <template #right>
        <van-button square
                    text="删除"
                    type="danger"
                    class="delete-button"
                    @click="DelShopCartGoods" />
      </template>
    </van-swipe-cell>
  </div>

</template>

<script>
import CartListCount from './CartListCount.vue';
export default {
  props: {
    ListItem: {
      type: Object,
      default: {},
      required: true

    }
  },
  created () {
    // console.log(this.ListItem);
  },
  name: 'goodsListItem',
  components: {
    CartListCount
  },
  data () {
    return {

    };
  },
  methods: {
    DelShopCartGoods () {
      const GoodsID = this.ListItem.ShopCartGoodsID
      this.$emit("DelGoods", GoodsID)
    }

  },
  computed: {
    title () {
      return this.ListItem.title
    },
    desc () {
      return this.ListItem.desc
    },
    Price () {
      return this.ListItem.Price
    },
    image () {
      return this.ListItem.image
    },
    GetShopid () {
      return this.ListItem.ShopCartGoodsID
    },

  },

}
</script>

<style scoped>
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.goodsListItem {
  padding: 10px;
  width: 100%;
  height: 130px;
  margin: 5px 0px;
  background-color: #fff;
  border-radius: 10px;
}
.van-card__title {
  margin-bottom: 5px;
}
.goodsListItem input {
  position: relative;
  top: -62px;
  display: inline-block;
}
.van-card__price {
  color: rgb(255, 0, 0);
  font-weight: 600;
}
/* .CartGoodsLeft {
  display: flex;
}

.CartGoodsLeft img {
  width: 85px;
  height: 110px;
  border-radius: 10px;
}

.CartGoodsRight {
  width: 60%;
  position: relative;
  margin-left: 15px;
}
.CartGoodsRight p {
  height: 25px;
  line-height: 25px;
  font-size: 15px;
  color: black;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.CartDesc {
  display: block;
  margin-top: 12px;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.CartPrice {
  position: absolute;
  bottom: 10px;
  font-size: 16px;
  color: rgb(255, 0, 0);
  font-weight: 700;
}
.CartCount {
  position: absolute;
  bottom: 5px;
  right: 0;
} */
</style>