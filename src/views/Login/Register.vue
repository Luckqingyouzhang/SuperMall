<template>
  <div class='Register'>
    <div class="RegisterLogoBox">
      <img src="../../assets/img/Logo/ShopLogo.png" />
    </div>
    <!-- 用户名 组件输入框 -->

    <van-field v-model="username"
               required
               label="用户名"
               placeholder="请输入用户名" />
    <!-- 用户密码  组件输入框 -->

    <van-field v-model="password"
               type="password"
               required
               label="用户密码"
               placeholder="请输入密码" />

    <!-- 用户短信验证 组件输入框 -->
    <van-field v-model="NoteCode"
               center
               clearable
               label="短信验证码"
               placeholder="请输入短信验证码">

      <!-- 用户发送验证码按钮  组件输入框 -->
      <template #button>
        <van-button size="small"
                    type="primary"
                    class="SendInfo"
                    @click="SendCode"
                    :disabled='SendMathCode'>发送验证码 <span v-show="SendMathCode">({{SendMathCodeTime}})</span></van-button>
      </template>
    </van-field>
    <!-- 用户发送验  组件 结束输入框 -->

    <!-- 注册按钮 组件开始  -->
    <van-button round
                block
                type="info"
                native-type="submit"
                style="width:90%;margin: 20px auto"
                @click="FinishRegister">立即注册</van-button>
    <div class="RegisterBack"
         @click="RegisterBack()">返回登录
    </div>
    <!-- 注册按钮 组件结束  -->
  </div>
</template>

<script>
import NavBar from '../../components/common/Navbar/NavBar.vue';

import { getRegisterData } from '../../network/Login/Login'
export default {
  name: 'Register',
  components: { NavBar },
  data () {
    return {
      // 用户账号 
      username: '',
      // 用户密码 
      password: '',
      // 用户状态 
      userStatus: 0,
      //用户等级
      userGrade: 0,
      // 用户验证码输入框 存值
      NoteCode: '',
      // 注册用户对象 
      User: {},
      // 用户数组 
      Userlist: [],
      // 发送随机验证码 的按钮的状态 
      SendMathCode: false,
      // 随机验证码 字符 
      MathString: '',
      // 发送验证码 倒计时 时间 默认为 60
      SendMathCodeTime: 60

    };
  },
  methods: {
    RegisterBack () {
      // 当用户 点击返回上一级 时 直接返回到 登录页面  
      this.$router.back()
    },

    /**
     *  当用户点击注册时 进行验证 对账号 和验证码进行验证  
     * 
     */
    async FinishRegister () {
      let CellPoe = /^1[3|4|5|7|8][0-9]{9}$/;
      if (this.username === '' || !CellPoe.test(this.username) || this.password === '' || this.username === null) {
        this.$toast('请输入正确的信息');
      }
      else {
        if (this.NoteCode != this.MathString || this.NoteCode === '') {
          this.$toast('请输入正确的验证码');
        }
        else {
          const resSuccess = await getRegisterData(this.username, this.password)
          if (resSuccess === 200) {
            this.$toast('注册成功');
          }
          else {
            this.$toast('该用户已注册，请勿重复注册');
          }


          // // 将 用户账号 存入 
          // this.User.Username = this.username
          // // 将 用户密码 存入 
          // this.User.Password = this.password
          // // 将 用户手机号存入 
          // this.User.Phone = this.username
          // //  // 将 用户状态 存入 0代表 未登录  1 代表已登录  2 异常账号  
          // this.User.UserStatus = this.userStatus
          // // 将用户等级存入  0 普通用户  1 尊贵会员   2 超级会员  3 优质客户
          // this.User.UserGrade = this.userGrade
          // this.$store.state.Userlist.push(this.User)
          // this.$toast('注册成功');
          // localStorage.setItem('Userlist', JSON.stringify(this.$store.state.Userlist))
          // this.$store.state.Userlist = JSON.parse(localStorage.getItem('Userlist'))
        }
      }




    },


    //生成验证码 方法 
    getMathCode () {
      for (let i = 0; i < 6; i++) {
        this.MathString += Math.round(Math.random() * 9)
      }
    },


    /// 发送验证码功能模块函数 
    SendCode () {
      //调用生成验证码的方法  
      /**
       * 逻辑思路 编写人：张庆友 
       * 1 当用户点击 发送验证码按钮时  第一步 将按钮 disable 状态改为   true
       * 2 对发送验证码 是否点击 时间进入倒计时 每60秒才能重新点击 
       * 3 判断 当前的倒计时时间 如果等于 0 的时候 需要将 倒计时时间和 随机字符串重置  
       * 4 清除当前定时器  使用完毕 重新计时 
       * 5 生成一个 10以内的随机数 对其进行 拼接 000 供 用户生成验证码使用 生成 1000 - 10000 以内的 四位随机数
       * 6 开启 一个定时器  用 10 秒之内 随机的时间弹出 验证码的信息框 
       * 
       */

      if (this.username === '') {
        this.$toast('请先输入手机号');
      }
      else {

        //  当用户点击 发送验证码 提示发送成功 
        this.$toast('发送成功');

        // 1 当用户点击 发送验证码按钮时  第一步 将按钮 disable 状态改为   true
        this.SendMathCode = true

        // 2 对发送验证码 是否点击 时间进入倒计时 每60秒才能重新点击 
        let SendCodeStatusTimer = setInterval(() => {
          //  3 判断 当前的倒计时时间 如果等于 0 的时候 需要将 倒计时时间和 随机字符串重置  
          this.SendMathCodeTime--
          if (this.SendMathCodeTime === 0) {
            this.SendMathCode = false
            this.SendMathCodeTime = 60
            this.MathString = null
            // 4  清除当前定时器  使用完毕 重新计时 
            clearInterval(SendCodeStatusTimer)
          }
        }, 1000);


        // 5 生成一个 10以内的随机数 对其进行 拼接 000 供 用户生成验证码使用 生成 1000 - 10000 以内的 四位随机数
        let RandomSendTime = Math.round(Math.random() * 10); RandomSendTime = parseInt( RandomSendTime + '000')


        // Delay (延迟 )   Reception (接收 )  6 开启 一个定时器  用 10 秒之内 随机的时间弹出 验证码的信息框 
        let DelayReceptionCode = setInterval(() => {
          this.getMathCode()
          const CodeText = `[Zhang Sir]验证码:${this.MathString} 此验证码只用于注册使用，1分钟内有效`
          this.$dialog.alert({
            message: CodeText,
          });
          // 7 清除随机定时器 
          clearInterval(DelayReceptionCode)
        }, RandomSendTime);

      }


    }
  },
}

</script>

<style scoped lang="less">
@baseSize: 3.75vw;
.Register {
  position: absolute;
  width: 100%;
  z-index: 15;
  height: 100vh;
  background-color: #fff;
}
.RegisterLogoBox {
  width: 100%;
  height: 220px;
  background-color: #ddd;
}
.RegisterLogoBox img {
  width: 100%;
  height: 100%;
}
.SendInfo {
  background-color: #1989fa;
  border: 1px solid #1989fa;
  border-radius: 10px;
}
.RegisterBack {
  width: 100%;
  text-align: right;
  font-size: 12px;
  padding-right: 15px;
}
.RegisterBack img {
  margin-top: 7.5px;
  margin-left: 20px;
  width: 25px;
  height: 25px;
}
</style>