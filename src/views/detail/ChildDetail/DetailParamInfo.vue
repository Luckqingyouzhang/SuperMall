<template>
  <div class='DetailParamInfo'
       v-if="Object.keys(Paraminfo).length !==0">
    <table v-for="(table, index) in Paraminfo.sizes"
           class="info-size"
           :key="index">
      <tr v-for="(tr, indey) in table"
          :key="indey">
        <td v-for="(td, indez) in tr"
            :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in Paraminfo.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img"
         v-if="Paraminfo.image.length !== 0">
      <img :src="Paraminfo.image"
           alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailParamInfo',
  components: {},
  props: {
    Paraminfo: {
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
}
</script>

<style scoped>
.DetailParamInfo {
  background-color: rgb(255, 253, 253);
  border-radius: 10px;
  margin: 10px auto 10px;
  width: 95%;
  padding: 5px 10px 0px;
  font-size: 16px;
}
.DetailParamInfo table {
  width: 100%;
  border-collapse: collapse;
}

.DetailParamInfo table tr {
  height: 42px;
}

.DetailParamInfo table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb1c15;
}

.info-img img {
  width: 100%;
}
</style>