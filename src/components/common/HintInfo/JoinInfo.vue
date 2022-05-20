<template>
  <div class='JoinInfo'>
    <div class="Detail-Join-Cart">
      <slot name="CenterInfo"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'JoinInfo',
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
.Detail-Join-Cart {
  position: absolute;
  width: 300px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50px;
  color: #67c23a;
  font-size: 12px;
  top: 50%;
  left: 50%;
  background-color: rgb(240, 249, 235, 0.9);
  transform: translate(-50%, -50%);
}
</style>