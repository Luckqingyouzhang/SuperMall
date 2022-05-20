<template>
  <div class='nav-bar'>
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeadLine',
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
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.nav-left,
.nav-right {
  width: 60px;
  /* background-color: tomato; */
}
.nav-center {
  flex: 1;
  text-align: center;
  /* background-color: tomato; */
  color: rgb(255, 255, 255);
}
</style>