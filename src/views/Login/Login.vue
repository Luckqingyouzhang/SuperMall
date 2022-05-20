<template>
  <div class='Login'>
    <div class="ShopLogoBox">
      <img src="../../assets/img/Logo/ShopLogo.png" />
    </div>
    <van-form>
      <van-field v-model="username"
                 name="用户名"
                 label="用户名"
                 placeholder="用户名/手机号"
                 :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password"
                 type="password"
                 name="密码"
                 label="密码"
                 placeholder="密码"
                 :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;">
        <van-button round
                    block
                    type="info"
                    native-type="submit"
                    @click="UserLogin">登录</van-button>
      </div>
    </van-form>
    <!-- 登录按钮下的功能模块 -->
    <div class="LoginModel">
      <span class="PhoneLogin"
            @click="GoRegister">立即注册</span>
      <span class="ForgetPass">忘记密码？</span>
    </div>
    <!-- 我同意该APP协议 模块 -->
    <div class="agreementModel">
      <div class="innerModel">
        <label for="text"><input type="checkbox"
                 @click="LoginProTocolStatus($event)"
                 id="text">
          <span>我已知晓并同意该协议</span></label>
      </div>
    </div>
  </div>

</template>

<script>
import { SetLocalStorageUserData } from '../../LocalStoragedata/LocalStorageData'
import { getLoginData } from '../../network/Login/Login'
import axios from 'axios'
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      username: '',
      password: '',
      //登录协议 
      LoginProTocol: false
    };
  },
  methods: {
  },
  methods: {
    // 当用户点击注册时 跳转至 注册页面
    GoRegister () {
      this.$router.push('/Register')
    },
    // 将 协议的状态值 赋予 this.LoginProTocol 方便后面判断
    LoginProTocolStatus (e) {
      this.LoginProTocol = e.target.checked
    },

    /**
     *1： 对用户登录进行一个验证  
     2:
     * 
     */
    async UserLogin () {

      if (this.username === '' || this.password === '') {
        this.$toast('账号或密码不能为空!');
      }
      else {
        if (this.LoginProTocol) {
          const Success = await getLoginData(this.username, this.password)
          if (Success.code === 401) {
            this.$toast('账号或密码错误');
          }
          else {
            this.$store.state.token = Success.token
            // 如果用户登录成功 将token值给到Vuex里            
            this.$toast('登录成功');
            let YesLogin = setInterval(() => {
              this.$router.push('/home')
              clearInterval(YesLogin)
            }, 1000);
          }
        }
        else {
          this.$toast('请勾选下方协议');
        }

        // 本地存储方法 1 

        // axios.post('http://192.168.1.4:8080/api/login', {
        //   username: this.username,
        //   password: this.password

        // }).then(res => {
        //   if (this.LoginProTocol) {
        //     // 如果用户登录成功 将 Vuex 中当前 用户数组 的 UserStatus 更改为 1 
        //     this.$toast('登录成功');
        //     let YesLogin = setInterval(() => {
        //       this.$router.push('/home')
        //       clearInterval(YesLogin)
        //     }, 1000);
        //   }
        //   else {
        //     this.$toast('请勾选下方协议');
        //   }
        // })
        // let OldLocalUser = null
        // OldLocalUser = this.$store.state.Userlist.find(item => item.Username === this.username)
        // if (OldLocalUser) {
        //   this.$store.state.Userlist.filter(item => item.Username === this.username).forEach(item => {
        //     if (item.Username === this.username && this.password === item.Password) {
        //       if (this.LoginProTocol) {
        //         // 如果用户登录成功 将 Vuex 中当前 用户数组 的 UserStatus 更改为 1 
        //         item.UserStatus = 1
        //         localStorage.setItem('Userlist', JSON.stringify(this.$store.state.Userlist))
        //         this.$toast('登录成功');
        //         let YesLogin = setInterval(() => {
        //           this.$router.push('/home')
        //           clearInterval(YesLogin)
        //         }, 1000);
        //       }
        //       else {
        //         this.$toast('请勾选下方协议');
        //       }


        //     }
        //     else {
        //       this.$toast('账号或密码错误!');
        //     }
        //   })
        // }
        // else {
        //   this.$toast('用户不存在!');
        // }
      }

    }

  },
}
</script>

<style scoped>
.Login {
  position: relative;
  width: 100%;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
.van-form {
  width: 100%;
  position: relative;
  top: 70px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ShopLogoBox {
  width: 100%;
  height: 220px;
  background-color: #ddd;
}
.ShopLogoBox img {
  width: 100%;
  height: 100%;
}
.LoginModel {
  display: flex;
  padding: 0px 20px;
  height: 30px;
  font-size: 13px;
  justify-content: space-between;
}
.PhoneLogin {
  flex: 1;
  justify-self: flex-start;
}
.ForgetPass {
  justify-self: flex-end;
}

.ForgetPass:hover {
  color: #1989fa;
}
.PhoneLogin:hover {
  color: #1989fa;
}
.agreementModel {
  position: absolute;
  bottom: 50px;
  width: 100%;
  height: 50px;
  font-size: 14px;
  text-align: center;
}
.innerModel {
  line-height: 50px;
}
.agreementModel span {
  display: inline-block;
  margin-left: 5px;
}
</style>