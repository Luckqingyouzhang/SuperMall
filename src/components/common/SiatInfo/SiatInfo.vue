<template>
  <div class='SitaInfo'>
    <div class="SitaPageBag">
      <div class="PageTop">
        <slot name="top"></slot>
      </div>
      <div class="PageCenter">
        <slot name="center"></slot>
      </div>
      <div class="PageBottom">
        <slot name="bottom"></slot>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'SitaInfo',
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
.SitaInfo {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.3);
}
.SitaPageBag {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
}
.PageTop,
.PageCenter,
.PageBottom {
  background-color: rgb(255, 255, 255);
}
.PageCenter {
  width: 100%;
  height: 45%;
  margin-top: 10px;
}
.PageBottom {
  width: 100%;
  height: 15%;
  margin-top: 10px;
}
</style>