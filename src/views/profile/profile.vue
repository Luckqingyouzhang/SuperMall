<template>
  <div id='profile'>
    <!-- <scroll class="content"> -->
    <profile-info></profile-info>
    <main-profine></main-profine>
    <!-- </scroll> -->

  </div>
</template>

<script>
import NavBar from '../../components/common/Navbar/NavBar.vue'
import scroll from '../../components/common/Scroll/scroll.vue'

import MainProfine from './ChildCompomen/MainProfine.vue'
import ProfileInfo from './ChildCompomen/ProfineInfo.vue'

// import axios from 'axios'
export default {
  name: "profile",
  components: { NavBar, scroll, ProfileInfo, MainProfine },
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

  },

  // activated () {
  //   axios.get("http://192.168.1.11:8080/api/hy66/home/multidata").then(res => {
  //     console.log(res);
  //   })
  // }
}
</script>

<style scoped>
.profile {
  position: relative;
  height: 100vh;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>