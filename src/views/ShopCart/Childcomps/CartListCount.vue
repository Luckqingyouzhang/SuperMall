<template>
  <div class='CartListCount'>
    <span> <button @click="CartListData.count--">-</button></span>
    <span> <input type="number"
             v-model="CartListData.count"></span>
    <span> <button @click="CartListData.count++">+</button></span>
  </div>
</template>

<script>

export default {
  props: {
    CartListData: {
      type: Object,
      default: {

      }
    }
  },
  activated () {
  },
  created () {
    console.log();
  },
  name: 'CartListCount',
  components: {},
  data () {
    return {

    };
  },
  watch: {
    CartListData: {
      deep: true,
      handler () {
        if (this.CartListData.count < 1) {
          this.CartListData.count = 1
        }
      }
    }
  }
}

</script>

<style scoped>
.CartListCount {
  display: flex;
}
.CartListCount span {
  margin: 2px;
  justify-content: center;
}
button {
  width: 30px;
  height: 25px;
  font-size: 18px;
  background-color: #fff;
  outline: #ddd;
  border: 1px solid #ddd;
}
input {
  text-align: center;
  font-size: 12px;
  width: 30px;
  height: 25px;
  outline: #ddd;
  border: 1px solid #ddd;
}
</style>