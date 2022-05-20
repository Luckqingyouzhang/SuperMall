<template>
  <div class='detailBaseInfo'
       v-if="Object.keys(Shopgoods).length !== 0">
    <div class="NowPrice">
      {{Shopgoods.realPrice}}
      <div class="OrgPrice">价格<del>{{Shopgoods.oldPrice}}</del></div>
      <div class="discount">{{Shopgoods.discount}}</div>
    </div>
    <div class="getintegral-model">购买得积分</div>
    <div class="Detail-Baseinfo-title">{{Shopgoods.title}}</div>
    <div class="Shop-Status">
      <span>{{Shopgoods.columns[0]+"+"}}</span>
      <span>{{Shopgoods.columns[1]}}</span>
      <span>{{Shopgoods.services[Shopgoods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item"
            v-for="index in Shopgoods.services.length-1"
            :key="index">
        <img :src="Shopgoods.services[index-1].icon"
             alt="">
        <span>{{Shopgoods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'detailBaseInfo',
  props: {
    Shopgoods: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {},
  data () {
    return {

    };
  },
  methods: {

  },
}
</script>

<style scoped>
.detailBaseInfo {
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  margin: 10px auto 10px;
  width: 95%;
  padding: 5px 10px 0px;
}
.NowPrice {
  color: #ff5902;
  font-weight: 600;
  font-size: 20px;
}
.OrgPrice {
  display: inline-block;
  color: rgb(134, 134, 134);
  font-weight: 300;
  font-size: 12px;
  margin-left: 5px;
}
.Detail-Baseinfo-title {
  padding: 5px 10px;
  color: black;
  font-weight: 700;
  font-size: 15px;
}
.getintegral-model {
  margin-top: 3px;
  width: 80px;
  height: 20px;
  color: #ec5d29;
  text-align: center;
  background-color: #fbeee6;
  line-height: 20px;
}
.discount {
  display: inline-flex;
  background-color: #fdeee5;
  font-size: 16px;
  border-radius: 5px;
}
.Shop-Status {
  display: flex;
  padding: 5px 10px;
  line-height: 30px;
  font-size: 14px;
  color: #999;
  /* border-bottom: 1px solid rgba(100, 100, 100, 0.1); */
  justify-content: space-between;
}
.info-service {
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>
