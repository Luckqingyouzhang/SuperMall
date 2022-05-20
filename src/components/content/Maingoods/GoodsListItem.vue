<template>
  <div class="GoodsItem"
       @click="detaildata()">
    <img :src="ShowImage"
         alt=""
         @load="Itemonload()">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <div class="Price-and-num">
        <span class="PriceSpan">{{goodsItem.price+'元'}}</span>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'GoodsListItem',
  components: {

  },
  props: {
    goodsItem: {
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
  computed: {
    ShowImage () {
      return this.goodsItem.image || this.goodsItem.show.img
    }

  },


  methods: {
    Itemonload () {
      //事件总线 
      this.$bus.$emit("Itemimgload")
    },
    detaildata () {
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodsItem.iid
        }
      })
    }

  },
  filters: {
  }
}
</script>

<style scoped>
.GoodsItem {
  width: 50%;
  position: relative;
  padding: 0px 3px 5px;
  display: inline-block;
}
.GoodsItem img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  text-align: center;
  background-color: fff;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 500;
  color: rgb(0, 0, 0);
}
.goods-info span {
  width: 50%;
  display: inline-block;
  color: #ec5d29;
}
/* .PriceSpan::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  background: url("~Pro/img/common/collect.svg") 0 0/14px 14px;
} */
</style>