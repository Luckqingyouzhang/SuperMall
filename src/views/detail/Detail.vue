<template>
  <div id="detail-model">

    <detail-nav-bar class="detail-nav"
                    @TabNavClick='DetailNavbarClick'
                    ref="detailNavbar"></detail-nav-bar>
    <scroll class="content"
            ref="DetailScroll"
            @BackTopParams='contentScroll'
            :probe-type="3">
      <detail-swiper :TopImage="TopImage"
                     class="detailSwiperCSS"></detail-swiper>
      <detail-base-info :Shopgoods="goods"
                        ref=""></detail-base-info>
      <detail-shopinfo :ShopData="ShopData"></detail-shopinfo>
      <detail-goodsinfo :detailinfo="detailinfo"
                        @DetailImageLoadListenter='DetailImageLoad'></detail-goodsinfo>
      <detail-paraminfo :Paraminfo="ParamInfo"
                        ref="Params"></detail-paraminfo>
      <detail-commentinfo :commentInfo="Commentinfo"
                          ref="comment"></detail-commentinfo>
      <goods-list :goods="recommend"
                  ref="recommend"></goods-list>
    </scroll>
    <join-info ref="joinInfo"
               v-show="isJoinShow">
      <div slot="CenterInfo">添加商品成功(successfully added)</div>
    </join-info>
    <back-top v-show="ShowBackTOP"
              @click.native="BackTOPFun"></back-top>
    <detail-bottom-bar @launchAddShopCart_Click='AddShopCart'></detail-bottom-bar>
  </div>
</template>

<script>

import detailNavBar from './ChildDetail/DetailNavbar.vue' // 详情页头部导航栏
import detailSwiper from './ChildDetail/DetailSwiper.vue' // 详情页轮播图
import DetailBaseInfo from './ChildDetail/DetailBaseInfo.vue'//详情页商品信息 
import DetailShopinfo from './ChildDetail/DetailShopinfo.vue'   //详情页商店信息 
import DetailGoodsinfo from './ChildDetail/DetailGoodsinfo.vue'  // 详情页 衣服图片展示效果图
import DetailParaminfo from './ChildDetail/DetailParamInfo.vue'  // 详情页 衣服尺寸参数信息
import DetailCommentinfo from './ChildDetail/DetailCommentinfo.vue'  // 详情页 评论信息  
import DetailBottomBar from './ChildDetail/DetailBottomBar.vue'

import JoinInfo from '../../components/common/HintInfo/JoinInfo.vue'
import BackTop from '../../components/content/MainBackTop/BackTop.vue'// 返回顶部组件 
import GoodsList from '../../components/content/Maingoods/GoodsList.vue'  // 详情页推荐数据信息  

import Scroll from '../../components/common/Scroll/scroll.vue'

import { Goods, Shop, GoodsParam } from '../../network/detail/ConstructionMethod/DetailClass.JS'

import { getCommodityDetail, getrecommend } from '@/network/detail/detail'


import { debounce } from '../../common/debounce'

//混入JS 公共模块导入   模块
import { ItemListenterMixin } from '../../common/mixin'




export default {
  name: 'Detail',
  components: {
    detailNavBar, detailSwiper, DetailBaseInfo, DetailCommentinfo,
    DetailShopinfo, DetailGoodsinfo, DetailParaminfo, Scroll,
    GoodsList,
    BackTop,
    JoinInfo,
    DetailBottomBar
  },
  mixins: [ItemListenterMixin],
  data () {
    return {
      Shopid: null,  // 详情页各个商品ID
      TopImage: [],
      goods: {},
      ShopData: {},  // 获取商家信息 获取商家评分，名称等数据 
      detailinfo: {}, //存储  获取详情信息 图片，文字 的数据
      ParamInfo: {},// 存储  商品尺码参数数据 
      Commentinfo: {}, //  存储 商品评论信息 
      recommend: [],  // 存储  推荐信息  
      ShowBackTOP: false,  // 设置详情页返顶部是否可见
      ThemeTopYs: [],
      getThemeTopY: null,
      currentindex: 0,
      isJoinShow: false

    };
  },
  created () {
    //保存商品ID 
    this.Shopid = this.$route.query.iid
    //调用封装getCommodityDetail 方法 进行数据请求 详情请见 network/derail/detail.js
    getCommodityDetail(this.Shopid).then(res => {
      //获取轮播图数据 
      console.log(res);
      const data = res.result
      // 2将轮播图数据 存储到 Topimage 数组中 
      this.TopImage.push(...data.itemInfo.topImages)


      //3 实例化  new构造函数中的实例  获取 商品title  价格 销量等数据 
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //4 实例化商家信息 获取商家评分，名称等数据 
      this.ShopData = new Shop(data.shopInfo)

      // 5 获取详情信息 图片，文字 的数据
      this.detailinfo = data.detailInfo

      // 6 获取衣服尺码 腰围 参数信息 
      this.ParamInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //7取出评论信息 
      if (data.rate.cRate !== 0) {
        this.Commentinfo = data.rate.list[0]
      }

      // 8 取出recommend 推荐 数据  
      getrecommend().then(res => {
        // console.log(res);
        this.recommend = res.data.list
      })
    })

    /**
     * 将 定义的 getThemeTopY作为接收  将导航栏各个模块的offsetTop 的值进行获取 
     * 将值添加到数组  ThemeTopYs  中   对该函数进行防抖操作 
     * 
    */
    this.getThemeTopY = debounce(() => {
      this.ThemeTopYs = []
      this.ThemeTopYs.push(0);
      this.ThemeTopYs.push(this.$refs.Params.$el.offsetTop);
      this.ThemeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.ThemeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.ThemeTopYs.push(Number.MAX_VALUE)
      // console.log(this.ThemeTopYs);
    }, 100)

  },
  destroyed () {
    this.$bus.$off("Itemimgload", this.ItemimgListenter)
  },


  methods: {
    contentScroll (position) {
      this.ShowBackTOP = (-position.y > 1000)
      /***
       * 1 获取Scroll Y的值 对数据进行取数  
       * 2：将详情页 scroll Y的值 赋值给新的变量 做记录
       * 3：对详情页各个商品 参数 评论 推荐 当前页面Y的数据i进行遍历 
       */
      const length = this.ThemeTopYs.length
      const currentThemeTopYs = -position.y

      for (let i = 0; i < length - 1; i++) {
        // 原写法
        // if (this.Currentindex !== i && ((i < length - 1 && currentThemeTopYs >= this.ThemeTopYs[i] &&
        //   currentThemeTopYs <= this.ThemeTopYs[i]) || (i === length - 1 && currentThemeTopYs >= this.ThemeTopYs[i]))) {
        // 优化写法
        if (this.currentindex !== i && (currentThemeTopYs >= this.ThemeTopYs[i] && currentThemeTopYs < this.ThemeTopYs[i + 1])) {
          this.currentindex = i
          // console.log(this.currentindex);
          this.$refs.detailNavbar.currentindex = this.currentindex
        }

      }
    },
    /**
     * 
     * 
     */
    DetailImageLoad () {
      this.getThemeTopY(); //调用getThemeTopY 函数 
    },

    /**
     * 
     * 点击商品详情页的返回顶部按钮 
     * 对scroll的 x y 值重置为 0 0 返回顶部
     * 
     */
    BackTOPFun () {
      this.$refs.DetailScroll.ScrollTo(0, 0, 500)
    },
    /**
     * 
     * 点击详情页 顶部导航栏跳转至 指定的页面位置 
     * 
     */
    DetailNavbarClick (index) {
      this.$refs.DetailScroll.ScrollTo(0, -this.ThemeTopYs[index], 500)
    },

    /**
     * 点击 修改 加入购物车 弹出的提示信息状态
     *  当点击加入购物车 会提示添加商品成功
     * 在LongTime 传递的参数时间内会进行改变状态使其消失
     * 
    */
    JoinCartListFun (LongTime) {
      this.isJoinShow = true
      let self = this;
      let timer = setTimeout(() => {
        self.isJoinShow = false;
      }, LongTime)
      clearInterval({
        timer
      })
    },
    AddShopCart (NowShopid) {
      // 将购物车需要展示的数据保存
      const ShopCart = {}
      ShopCart.image = this.TopImage[0];  /// 将购物车商品图片 进行保存
      ShopCart.Price = this.goods.realPrice  // 将购物车商品价格 进行保存
      ShopCart.title = this.goods.title  // 将购物车商品标题 进行保 存
      ShopCart.desc = this.goods.desc   //将商品介绍进行保存 
      ShopCart.ShopCartGoodsID = NowShopid
      ShopCart.count = 0
      ShopCart.ShopStatus = true  // 将商品ID进行保存
      this.$store.dispatch('addCart', ShopCart)
      this.JoinCartListFun(1500)
      /***
       * 由于当前事件是由 
       * detail_bottom组件发射的事件 所以无法获取当前 this.iid 因此获取的值为
       * undefined  传递过去的即为undefined 
       * 
       */
      // 将 ShopCart 对象添加到Vuex 对象中 

    }
  },



}
</script>

<style scoped>
#detail-model {
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: #fff;
}
.detailSwiperCSS {
  border-radius: 10px;
}
/* .detail-nav {
  position: fixed;
  width: 100%;
  z-index: 9;
  background-color: #fff;
} */
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>