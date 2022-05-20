<template>
  <div class='detailNavbar'>
    <nav-bar>
      <div slot="left"
           class="Back"
           @click="BackRouter()">
        <img src="~Pro/img/detail/Back.png"
             alt="">
      </div>
      <div slot="center"
           class="detail-Navbar-center">
        <div v-for="(item,index) in titles"
             class="Navbar-center-title"
             :class="{active:currentindex === index}"
             @click="CurrentList(index)">{{item}}</div>
      </div>
      <div slot="right"
           class="search">
        <img src="~Pro/img/detail/search.png"
             alt="">
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/Navbar/NavBar.vue'
export default {
  name: 'detailNavbar',
  components: { NavBar },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentindex: 0
    };
  },
  methods: {
    CurrentList (index) {
      this.currentindex = index
      this.$emit("TabNavClick", index)
    },
    BackRouter () {
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.detail-Navbar-center {
  display: flex;
  font-size: 12px;
  cursor: pointer;
}
.Navbar-center-title {
  flex: 1;
  color: #000000;
}
.active {
  /* color: var(--color-tint); */
  color: #f95822;
}
.Back,
.search {
  width: 100%;
  height: 100%;
}
.Back img {
  margin-top: 7.5px;
  margin-left: 10px;
  width: 25px;
  height: 25px;
}
.search img {
  margin-top: 7.5px;
  margin-left: 20px;
  width: 25px;
  height: 25px;
}
</style>