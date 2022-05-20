<template>
  <div class='BottomBar'>
    <div class="bottom-left">
      <slot name="left"></slot>
    </div>
    <div class="bottom-center">
      <slot name="center"></slot>
    </div>
    <div class="bottom-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BottomBar',
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
.BottomBar {
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0;
  height: 48px;
  line-height: 48px;
  box-shadow: 0px 0px 40px rgba(255, 0, 0, 0.3);
  background-color: #fff;
}
.bottom-left,
.bottom-right {
  width: 140px;
  padding: 0px 15px;
  /* background-color: tomato; */
}
.bottom-center {
  flex: 1;
  text-align: center;
  /* background-color: tomato; */
  color: rgb(0, 0, 0);
}
</style>