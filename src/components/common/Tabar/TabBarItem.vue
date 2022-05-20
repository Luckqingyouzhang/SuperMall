<template>
  <div class="tabbar-item"
       @click="itemclick()">
    <div v-if="!isactive">
      <slot name="item-icon">
      </slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle"
         @click="activetype()">
      <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/img/tabbar/home.svg"
         alt="">
    <div> 首页</div> -->
  </div>
</template>

<script>

export default {
  name: "TbaBarItem",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: '#1296db'
    }
  },
  data () {
    return {
    };
  },

  computed: {
    isactive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isactive ? { color: this.activecolor } : {}
    }
  },
  watch: {

  },
  methods: {
    itemclick () {

      this.$router.push(this.path)
    },
    activetype () {

    }
  },
}
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  cursor: pointer;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>