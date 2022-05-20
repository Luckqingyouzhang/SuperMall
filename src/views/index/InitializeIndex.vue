<template>
  <div class='InitializeIndex'>
    <div class="InitializeBck"
         v-show="isShow">
      <i class="InzLogo">购物人正确的选择
      </i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InitializeIndex',
  components: {},
  data () {
    return {
      isShow: true

    };
  },
  created () {
    let NowThis = this
    let timer = setInterval(() => {
      NowThis.isShow = false
    }, 3000)

    clearInterval({
      timer
    })
  },
  destroyed () {
    this.$router.push('/home')
  },
  methods: {

  },
}
</script>

<style scoped>
.InitializeBck {
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: absolute;
  background-image: linear-gradient(to right, #4b89f8, #5fb9f8);
}
.InzLogo {
  position: absolute;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>