<template>
  <div v-if="Object.keys(detailinfo).length !== 0"
       class='DetailGoodsinfo'>
    <div class="Goodsinfotitle">{{detailinfo.detailImage[0].key}}</div>
    <div>
      <img v-for="item in detailinfo.detailImage[0].list"
           :src="item"
           @load="imageLoad()"
           alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailGoodsinfo',
  components: {},
  props: {
    detailinfo: {
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
    imageLoad () {
      this.$emit("DetailImageLoadListenter")
    }

  },
}
</script>

<style scoped>
.DetailGoodsinfo {
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  margin: 10px auto 10px;
  width: 95%;
  padding: 5px 10px 0px;
  font-size: 15px;
}
.Goodsinfotitle {
  padding: 10px 0;
  line-height: 20px;
  text-align: center;
}
.DetailGoodsinfo img {
  width: 100%;
}
</style>