<template>
  <div class='tab-control'>
    <div class="tab-control-item"
         v-for="(item,index) in titles"
         :class="{active: index === currentindex}"
         @click="tabItemClick(index)"
         :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>
 
<script>

export default {
  name: 'TabControl',
  components: {},
  props: {
    titles: {
      //将需要展示的文字传递到子组件中 定义Props 
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentindex: 0
    };
  },
  methods: {
    tabItemClick (index) {
      this.currentindex = index
      this.$emit('tabclick', index)
    }
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  z-index: 8;
  color: #000;
}
.tab-control-item {
  background-color: #fff;
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: rgb(64, 138, 223);
}
.active span {
  color: rgb(64, 138, 223);
  border-bottom: 3px solid rgb(64, 138, 223);
}
</style>