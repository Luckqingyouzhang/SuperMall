<template>
  <div id='home'>
    <nav-bar class="home-nav">
      <div slot="center">购物商场</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 class="tab-control-Top"
                 @tabclick="UpdateTbabardata"
                 ref="tabcontrolShow"
                 v-show="IsAppearObj.isTabFexed"></tab-control>
    <scroll class="content"
            ref="ScrollDate"
            :probe-type="3"
            @BackTopParams='contentScroll'
            :PullUpload="IsAppearObj.isPullUP"
            @PullLoading='LoadMore'>
      <home-swiper :banners='banners'
                   @SwiperimgLoad="ControlTop"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']"
                   class="tab-control"
                   @tabclick="UpdateTbabardata"
                   ref="tabcontrolRoutine"></tab-control>
      <goods-list :goods="ShowGoods"></goods-list>
    </scroll>
    <back-top @click.native="BackTopFun()"
              v-show="IsAppearObj.isBackTop"></back-top>
  </div>
</template>

<script>

import Scroll from '../../components/common/Scroll/scroll.vue'
import NavBar from '../../components/common/Navbar/NavBar.vue'

import TabControl from '../../components/content/MainControl/TabControl.vue'
import GoodsList from '../../components/content/Maingoods/GoodsList.vue'
import BackTop from '@/components/content/MainBackTop/BackTop'

import HomeSwiper from './Childcomps/HomeSwiper.vue'
import RecommendView from './Childcomps/RecommendView.vue'
import FeatureView from './Childcomps/FeatureView.vue'

import { ItemListenterMixin } from '../../common/mixin'


import { getHomeMultidata, getHomeGoods } from '../../network/home/home'

export default {
  name: "home",
  components: {
    NavBar,
    TabControl,
    GoodsList,

    HomeSwiper,
    RecommendView,

    FeatureView,
    Scroll,
    BackTop,
  },
  data () {
    return {
      IsAppearObj: {
        isPullUP: true, // 
        isBackTop: false,
        isTabFexed: false
      },
      result: null,
      Currentpath: '',  // 当前路径
      CurrentPosition: '',
      TaboffsetTop: 0,
      ScrollY: 0, //获取HOME滑动YY轴的位置 
      banners: [],
      recommends: [],
      currentType: 'pop',
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
    };
  },

  mixins: [ItemListenterMixin],
  //组件创建完成
  created () {

    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    //数据调用防抖 节流 操作  
    this.BoundDataOpertation();
    this.ControlTop();
  },
  activated () {
    //当HOME处于活跃时 将上次记录的值传递给 ScrollTo方法 
    this.$refs.ScrollDate.ScrollTo(0, this.ScrollY, 0)
    this.$refs.ScrollDate.scroll.refresh()
  },
  deactivated () {
    //将Home模块组件 Y轴better-scroll y的值 赋值给ScrollY
    this.ScrollY = this.$refs.ScrollDate.getScrollY();

    //2取消全局事件的监听

    this.$bus.$off('Itemimgload', this.ItemimgListenter)
  },

  methods: {
    /**
     * 网络请求的相关方法 
     * 
     * 
    */
    getHomeMultidata () {
      //请求多个数据
      getHomeMultidata().then(res => {
        //输出home首页请求的数据
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      //请求商品数据
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.ScrollDate.finishPullUp();
        // this.imglink.push(...res.data.list)
        // console.log(this.imglink);
        // console.log(res.data.list[0].show.img);
        // for (let i = 0; i < this.imglink.length; i++) {
        //   console.log(this.imglink[i].title);
        // }    
      })
    },
    /***
     * 
     * 点击事件的相关方法
    */
    //点击切换Tbabar 的商品类型事件
    UpdateTbabardata (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabcontrolRoutine.currentindex = index
      this.$refs.tabcontrolShow.currentindex = index
    },
    BackTopFun () {
      // console.log(this.$refs.ScrollDate.srcoll);
      this.$refs.ScrollDate.ScrollTo(0, 0, 500)
    },
    contentScroll (position) {
      //对 scroll 滑块滑动的位置 进行判断 是否显示回到顶部元素 
      this.IsAppearObj.isBackTop = (-position.y) > 1000

      //对 scroll 滑块滑动的位置 进行判断 决定tabControl 是否显示 
      this.IsAppearObj.isTabFexed = (-position.y) > this.TaboffsetTop
    },
    BoundDataOpertation () {
      //该方法内同存入到 混入文件中
      this.newrefresh()
    },
    //上拉加载指定的模块数据 

    LoadMore () {
      this.getHomeGoods(this.currentType)
    },
    ControlTop () {
      this.TaboffsetTop = this.$refs.tabcontrolRoutine.$el.offsetTop
    }

  },
  computed: {
    ShowGoods () {
      return this.goods[this.currentType].list
    }
  }

}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  position: fixed;
  width: 100%;
  z-index: 9;
  background-image: linear-gradient(to right, #4486f7, #62edff);
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.tab-control-Top {
  position: relative;
  z-index: 9;
}
/* .content {
  height: calc(100%-93px);
  overflow: hidden;
} */
</style>