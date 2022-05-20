<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <!-- <initialize-index></initialize-index> -->
    <keep-alive :exclude="['Detail','check','ShopCart']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabbar/MainTabbar.vue'
// import InitializeIndex from './views/index/InitializeIndex.vue'
export default {
  name: 'App',
  components: {
    MainTabBar,
    // InitializeIndex,
  },
  created () {
    this.$store.dispatch("addCartLocalData")
    this.$store.dispatch('addUserListLocalData')

  },
}
</script>

<style>
@import "./assets/css/base.css";
</style>
