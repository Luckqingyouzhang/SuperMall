<template>
  <div class='AddSita'
       v-show="isShowPage">
    <siat-info>
      <div slot="top">
        <navbar>
          <div slot="left"
               @click="ShowPage()">
            <img src="~Pro/img/detail/Back.png"
                 alt="">
          </div>
          <div slot="center"
               class="AddSiat">添加收货地址</div>
          <div slot="right">
            <img src="~Pro/img/check/Share.png"
                 alt="">
          </div>
        </navbar>
      </div>
      <div slot="center"
           class="info-Zone">
        <div class="FirstInput">
          <span>收货人</span>
          <input type="text"
                 placeholder="请输入收货人姓名"
                 v-model="AddressInfo.name">
        </div>
        <div class="Second">
          <span>手机号</span>
          <input type="text"
                 placeholder="请输入手机号"
                 v-model="AddressInfo.Phone">
        </div>
        <div class="Thirdly">
          <span>所在地区</span>
          <input type="text"
                 placeholder="省市区县、乡镇等"
                 v-model="AddressInfo.Address">
        </div>
        <div class="Fourthly">
          <span>详细地址</span>
          <input type="text"
                 placeholder="街道，楼，门牌号"
                 v-model="AddressInfo.detailAddressInfo">
        </div>
        <div id="DeleteInfo">
          <label for="yes">
            <p>将此地址设为默认收货地址?</p>
            <input type="checkbox"
                   @click="isDeFault($event)"
                   id="yes">
          </label>
        </div>
      </div>
      <div slot="bottom"
           class="default-info">
        <div> <button @click="SaveAddressInfo()">保存并使用</button></div>
      </div>
    </siat-info>
  </div>
</template> 

<script>

import Navbar from '../../../components/common/Navbar/NavBar.vue'
import SiatInfo from '../../../components/common/SiatInfo/SiatInfo.vue';

export default {
  name: 'AddSita',
  components: { Navbar, SiatInfo },
  data () {
    return {
      isShowPage: false,
      AddressInfo: {
        name: '',
        Phone: null,
        Address: '',
        detailAddressInfo: '',
        default: null
      }
    }
  },
  methods: {
    ShowPage () {
      this.isShowPage = false
    },
    SaveAddressInfo () {
      this.$store.state.AddressInfo.push(this.AddressInfo)
      this.isShowPage = false
    },
    isDeFault (e) {
      this.AddressInfo.isdefault = e.target.checked

    }
  },
  watch: {

  }
}

</script>

<style scoped>
div,
span,
p,
input {
  font-family: Microsoft YaHei;
  font-size: 14px;
}
.AddSiat {
  width: 97%;
  color: #000;
  font-size: 15px;
}
img {
  margin-top: 7.5px;
  margin-left: 20px;
  width: 25px;
  height: 25px;
}
.default-info,
.info-Zone div {
  width: 90%;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
  border-bottom: 1px solid #f7f5f5;
  background-color: rgb(255, 255, 255);
}
.info-Zone span,
p {
  display: inline-block;
  margin-left: 10px;
}
.info-Zone input {
  height: 45px;
  text-align: right;
  float: right;
  font-size: 12px;
  outline: none;
  border: none;
  border-bottom: 1px solid #f7f5f5;
}
#DeleteInfo {
  width: 90%;
  height: 45px;
  line-height: 45px;
  margin-top: 20px;
  background-color: rgb(255, 255, 255);
  border-bottom: none;
}
button {
  width: 100%;
  height: 38px;
  outline: none;
  border: none;
  margin-top: 20px;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  background-color: #3e78f8;
}
</style>