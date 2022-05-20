<template>
  <div class='ProfineInfo'>
    <!-- 我的信息 页面  用户的基本信息  -->
    <div class="BasicUserInfo">
      <!-- //用户头像 -->
      <div class="UserPhoto">
        <img src="../../../assets/img/profile/User.jpg"
             alt="">
      </div>
      <div class="UserInfo">
        <p>用户昵称
          <i class="iconfont icon-chuangxiangqingtongvip">
          </i>
        </p>
        <span>ID:123456789</span>
      </div>
    </div>
    <!-- 用户积分 好友等 -->
    <div class="PersonalData">
      <div>
        <p>0</p>
        <span>我的好友</span>
      </div>
      <div>
        <p>98</p>
        <span>我的积分</span>
      </div>
      <div>
        <p>0</p>
        <span>我的银行</span>
      </div>
    </div>

    <div class="PersonBottomInfo">
      <div class="ActivePlane">
        <i>新用户开通</i>
        <p>开通免密支付立即赠送6个VIP</p>
        <span>一键升级></span>
      </div>
      <div class="ActivePlane2">
        <p><i class="iconfont icon-huiyuan"
             style="color:#d81e06"></i>&nbsp购买会员3次</p>
        <span>我要购买</span>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfineInfo',
  components: {
  },
  data () {
    return {
      PersonalData: [
        {

        }
      ]

    };
  },
  methods: {

  },
}
</script>

<style scoped>
.ProfineInfo {
  height: 250px;
  width: 100%;
  padding: 35px 15px 0px 15px;
  background-image: linear-gradient(to right, #3d7df8, #5fb9f8);
}
.BasicUserInfo {
  display: flex;
  align-items: center;
}

.BasicUserInfo .UserPhoto {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
}
.UserPhoto img {
  width: 100%;
  height: 100%;
}

.UserInfo {
  color: #fff;
  margin-left: 10px;
}
.UserInfo p {
  font-size: 16px;
  margin-bottom: 10px;
}
.UserInfo p i {
  color: rgb(255, 218, 9);
}
.UserInfo span {
  font-size: 13px;
}
.PersonalData {
  display: flex;
  justify-content: space-around;
  height: 80px;
  margin-top: 5px;
  padding: 20px 0px;
  color: #fff;
  font-size: 13px;
  text-align: center;
}
.PersonalData p {
  font-size: 18px;
  margin-bottom: 10px;
}
.PersonBottomInfo {
  color: #fff;
  position: relative;
}
.PersonBottomInfo .ActivePlane {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 35px;
  margin: 0 auto;
  padding: 0px 7px 0px 8px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-image: linear-gradient(to right, #464763, #201e36);
}
.PersonBottomInfo .ActivePlane2 {
  position: absolute;
  display: flex;
  box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  top: 33px;
  left: 0;
  width: 100%;
  height: 27px;

  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: linear-gradient(top right, #efe2bb, #e5cf9e);
}
.PersonBottomInfo .ActivePlane > i {
  font-weight: 600;
  font-size: 14px;
}
.PersonBottomInfo .ActivePlane > p {
  font-size: 12px;
  color: #c1c3ce;
}
.PersonBottomInfo .ActivePlane > span {
  display: inline-block;
  width: 70px;
  height: 20px;
  text-align: center;
  color: #000;
  background-color: #fadb5a;
  line-height: 20px;
  border-radius: 50px;
  font-size: 12px;
}
.PersonBottomInfo .ActivePlane2 p {
  font-size: 13px;
  color: #000;
  font-style: italic;
}
.PersonBottomInfo .ActivePlane2 span {
  width: 70px;
  height: 20px;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  border-radius: 50px;
  background-color: #000;
}
</style>