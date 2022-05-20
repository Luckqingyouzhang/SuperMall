<template>
  <div class=''>
    <tabbar>
      <tab-bar-item path="/home"
                    activecolor="#1296db"
                    activeColortype='String'>
        <!-- {value1:"",value2:"",value3:""} -->
        <img slot="item-icon"
             src="../../../assets/img/tabbar/home.svg"
             alt="首页">
        <img slot="item-icon-active"
             src="../../../assets/img/tabbar/home_active.svg"
             alt="首页">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category"
                    activecolor="#1296db"
                    activeColortype='String'>
        <img slot="item-icon"
             src="../../../assets/img/tabbar/category.svg"
             alt="分类">
        <img slot="item-icon-active"
             src="../../../assets/img/tabbar/category_active.svg"
             alt="分类">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart"
                    activecolor="#1296db"
                    activeColortype='String'>
        <img slot="item-icon"
             src="../../../assets/img/tabbar/shopcart.svg"
             alt="购物车">
        <img slot="item-icon-active"
             src="../../../assets/img/tabbar/shopcart_active.svg"
             alt="购物车">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile"
                    activecolor="#1296db"
                    activeColortype='String'>
        <img slot="item-icon"
             src="../../../assets/img/tabbar/profile.svg"
             alt="我的">
        <img slot="item-icon-active"
             src="../../../assets/img/tabbar/profile_active.svg"
             alt="我的">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from '../../common/Tabar/TabBar.vue'
import TabBarItem from '../../common/Tabar/TabBarItem.vue'
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabBarItem
  },
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

  },
}
</script> 

<style scoped>
</style>