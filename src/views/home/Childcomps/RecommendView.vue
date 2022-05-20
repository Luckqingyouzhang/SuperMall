<template>
  <div class="recommend">
    <div v-for="item in recommends"
         class="recommend-Item">
      <a :href="item.link">
        <img :src="item.image"
             alt=""
             class="recommend-img">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RecommendView',
  components: {

  },
  props: {
    recommends: {
      type: Array,
      default () {
        return []
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
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0px 15px;
  border-bottom: 8px solid #eee;
}
.recommend-Item {
  flex: 1;
}
.recommend-img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>