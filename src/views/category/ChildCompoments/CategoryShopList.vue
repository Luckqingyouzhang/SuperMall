<template>
  <div class='CategoryShopList'>
    <div class="rightCategoryList"
         v-for="(item,index) in CategoryShopList "
         :key="index">
      <ul>
        <a :href="item.link">
          <li> <img :src="item.image"
                 alt="图片加载失败">
            <div>{{item.title}}</div>
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CategoryShopList',
  props: {
    CategoryShopList: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
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
.rightCategoryList {
  display: inline-block;
  text-align: center;
}
.rightCategoryList li {
  height: 100px;
  font-size: 15px;
}
.rightCategoryList img {
  width: 80px;
  height: 80px;
}
</style>