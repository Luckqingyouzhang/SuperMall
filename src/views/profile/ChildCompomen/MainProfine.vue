<template>
  <div class='MainProfine'>
    <!-- // 订单模块 -->
    <div class="Orders">
      <!-- //标题 -->
      <div class="PlaneTitle">
        <div class="MyOrder">我的订单</div>
        <div class="LookAll">查看全部&nbsp<i class="iconfont icon-a-10-you"></i></div>
      </div>
      <!-- 订单 内容 -->
      <div class="OrdersContent">
        <div v-for="(item,index) in IconFonts"
             :key="index">
          <i :class="IconFonts[index].icon"
             class="iconfont"></i>
          <p>{{IconFonts[index].text}}</p>
        </div>
      </div>
    </div>
    <!-- 资产模块 Property(资产) -->
    <div class="MyProperty">
      <div class="PropertyTitle">
        <div>我的资产</div>
        <i class="iconfont icon-bukejian"></i>
      </div>
      <!-- //资产内容 -->
      <div class="PropertyContent">
        <!-- //钱包 Wallet -->
        <div class="MyWallet">
          <span>200.00元</span>
          <p>我的钱包</p>
          <i class="iconfont icon-qianbao"></i>

        </div>
        <!-- 优惠活动 金币金额 MyGold(金币) -->
        <div class="MyGold">
          <span>8440个</span>
          <p>我的金币</p>
          <i class="iconfont icon-jinbi"></i>
        </div>
      </div>
    </div>
    <div class="ManageModel">
      <div>
        <p> <i class="iconfont icon-a-6-didian"></i> 收货地址</p>
        <span class="iconfont icon-a-10-you"></span>
      </div>
      <div>
        <p> <i class="iconfont icon-a-2-caidan"></i> 商品分类</p>
        <span class="iconfont icon-a-10-you"></span>
      </div>
      <div>
        <p> <i class="iconfont icon-a-5-xinxi"></i> 我的消息</p>
        <span class="iconfont icon-a-10-you"></span>
      </div>
      <div>
        <p> <i class="iconfont icon-a-17-saoma"></i> 扫一扫</p>
        <span class="iconfont icon-a-10-you"></span>
      </div>
      <div>
        <p> <i class="iconfont icon-a-4-shezhi"></i> 个人设置</p>
        <span class="iconfont icon-a-10-you"></span>
      </div>
    </div>
    <div class="Exit">退出登录</div>

  </div>
</template>

<script>

export default {
  name: 'MainProfine',
  components: {},
  data () {
    return {
      PublicClass: 'iconfont',
      IconFonts:
        [
          {
            icon: 'icon-dingdan',
            text: '全部订单'
          },
          {
            icon: 'icon-daifukuan',
            text: '待付款'
          },
          {
            icon: 'icon-daishouhuo',
            text: '待收货'
          },
          {
            icon: 'icon-yizhifu',
            text: '已付款'
          },
          {
            icon: 'icon-shoucang',
            text: '收藏'
          },],

    };
  },
  methods: {

  },
}
</script>

<style scoped>
.MainProfine {
  padding: 10px 15px 49px 15px;
  background-color: #f5f6fa;
}
.Orders,
.MyProperty,
.ManageModel,
.Exit {
  color: #000;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: #fff;
}
.PlaneTitle {
  display: flex;
  justify-content: space-between;
}
.MyOrder {
  color: #000;
  font-size: 14px;
}
.LookAll {
  font-size: 12px;
  color: #b7b7b7;
}
.LookAll > i {
  font-size: 12px;
}
.OrdersContent {
  display: flex;
  padding: 15px 15px 0px 15px;
  text-align: center;
  font-size: 12px;
  justify-content: space-between;
}
.OrdersContent i {
  display: inline-block;
  margin-bottom: 5px;
  font-size: 30px;
  color: #3e7ff8;
}
.MyProperty {
  padding-right: 30px;
}
.PropertyTitle {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.PropertyContent {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 13px;
  box-sizing: border-box;
}
.MyWallet,
.MyGold {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 70px;
  margin-right: 5px;
  border-radius: 10px;
  background-color: #e3f7fe;
}
.MyGold {
  background-color: #fdf8e2;
  margin-right: 0;
}
.MyGold span,
.MyWallet span {
  margin-left: 15px;
  margin-top: 10px;
  line-height: 20px;
}
.MyGold p,
.MyWallet p {
  margin-left: 15px;
  font-size: 16px;
}

.MyWallet i {
  color: #1a90fe;
  font-size: 25px;
  align-self: flex-end;
}
.MyGold i {
  color: #feae17;
  font-size: 25px;
  align-self: flex-end;
}

.ManageModel,
.Exit,
.MyProperty {
  margin-top: 10px;
}
.ManageModel > div {
  font-size: 15px;
  display: flex;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
}
.ManageModel > div i {
  font-size: 20px;
}
.Exit {
  margin-bottom: 10px;
  color: #fb6e6f;
  text-align: center;
}
</style>