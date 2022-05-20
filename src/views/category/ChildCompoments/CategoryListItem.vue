<template>
  <div class='CategoryListItem'>
    <div class="CategoryList">
      <ul v-for="(item,index) in CategoryList"
          :key="index">
        <li :class="{liActiveBac: index === CateListCurrentindex}"
            @click="CategoryListClick(index)">{{item.title}}</li>
      </ul>
    </div>
  </div>

</template>

<script>
import scroll from '../../../components/common/Scroll/scroll.vue'
export default {
  name: 'CategoryListItem',
  props: {
    CategoryList: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
  },
  components: { scroll },
  data () {
    return {
      CateListCurrentindex: 0
    };
  },
  methods: {
    CategoryListClick (index) {
      this.CateListCurrentindex = index
      this.$emit('CateShopListParams', index)
    }
  },
}
</script>

<style scoped>
.CateLeftScroll {
  height: 100%;
}
.CategoryListItem {
  display: inline-block;
  width: 25%;
  text-align: center;
}
.CategoryList li {
  height: 50px;
  line-height: 50px;
}
.liActiveBac {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 123, 255);
  border-left: 3px solid rgb(0, 123, 255);
}
.CategoryShopList {
  display: flex;
  width: 100%;
}
</style>