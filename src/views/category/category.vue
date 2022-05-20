<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll id="ShopList" ref="ShopListScroll">
      <category-list-item
        :CategoryList="CategoryArrayData"
        @CateShopListParams="CateItemParams"
      ></category-list-item>
    </scroll>
    <scroll class="content" ref="CateScroll">
      <category-shop-list
        :CategoryShopList="CategoryShopArrayList"
      ></category-shop-list>
    </scroll>
  </div>
</template>


<script>
import CategoryListItem from "./ChildCompoments/CategoryListItem.vue";
import CategoryShopList from "./ChildCompoments/CategoryShopList.vue";

import NavBar from "../../components/common/Navbar/NavBar.vue";
import {
  getCategoryData,
  getCategoryShopListData,
} from "../../network/Category/Category.js";
import scroll from "../../components/common/Scroll/scroll.vue";
export default {
  name: "category",
  components: {
    NavBar,
    scroll,
    CategoryListItem,
    CategoryShopList,
  },
  data() {
    return {
      CategoryArrayData: [],
      CategoryShopArrayList: [],
      CateShopindex: null,
      currentindex: 0,
    };
  },
  created() {
    this.CategoryData();
  },
  updated() {
    // this.$refs.CateScroll.refresh()
    this.$refs.ShopListScroll.refresh();
  },

  methods: {
    async CategoryData() {
      /**
       *  请求 分类 数据
       * 在 request  方法中 封装   getCategoryData 方法
       *
       *
       *  */
      const res = await getCategoryData();
      // console.log(res);
      this.CategoryArrayData.push(...res.data.category.list);
      this.CateGoryShopList(0);
      // console.log(this.CategoryArrayData);
    },
    /***
     * 在 network 文件中配置 baseurl 请求参数  params url
     *
     * 请求分类页右侧商品列表数据
     *
     *
     */
    async CateGoryShopList(index) {
      const ParamsMaitKey = this.CategoryArrayData[index].maitKey;
      const result = await getCategoryShopListData(ParamsMaitKey);
      this.CategoryShopArrayList.push(...result.data.list);
    },
    CateItemParams(index) {
      const CategoryArrayLength = this.CategoryShopArrayList.length;
      this.CategoryShopArrayList.splice(0, CategoryArrayLength);
      this.CateGoryShopList(index);
    },
  },
  mounted() {
    // this.scroll = new Bscroll(document.querySelector('.wrapper'), {
    //   /// 只要是滚动，都继续侦测
    //   probeType: 3
    // })
    // this.scroll.on('scroll', (position) => {
    //   console.log(position);
    // })
  },
};
</script>

<style scoped>
#category {
  position: relative;
  height: 100vh;
  background-color: rgb(255, 255, 255);
}
#ShopList {
  position: absolute;
  top: 44px;
  left: 0%;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.content {
  position: absolute;
  top: 44px;
  left: 25%;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.category-nav {
  /* background-color: #1683ff; */
  background-image: linear-gradient(to right, #4486f7, #62edff);
}
.context {
  position: absolute;
  display: flex;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>