<template>
  <div class='ShopCartFooter'>
    <join-info v-show="isAllCount">
      <div slot="CenterInfo">你还没有选择的宝贝哦</div>
    </join-info>
    <div class="CarBottom">
      <!-- 全选模块 -->
      <div class="ALLmodule">

        <label>
          <input type="checkbox"
                 v-model="isAll"> 结算(ALL)</label>
      </div>
      <!-- 总价模块 -->
      <div class="AllCountModule">
        <span class="CountText">合计: <span class="PriceActive">{{getAllPrice}}</span></span>
      </div>
      <!-- 结算模块 -->
      <div class="close-an-account">
        <button @click="GoAccount"
                :disabled="isAllCount">结算({{AllCount}})</button>
      </div>
    </div>
  </div>
</template>

<script>
import JoinInfo from '../../../components/common/HintInfo/JoinInfo.vue'
export default {
  props: {
    FooterData: {
      type: Array,
      default(){
        return []
      }
    }
  },
  mounted(){
  },
  components: {
    JoinInfo
  },

  name: 'ShopCartFooter',
  data () {
    return {
      NotPrice: "0.00",
      isAllCount: false

    };
  },
  mounted(){

  },
  methods: {
    /***
     * 计算方法 当购物车为空 或 商品没有选中任何一个商品时  此时无法跳转到结算页面
     * 如果当前 购物车数据等于空 结算无法点击 无法跳转
     * 
     *  */
    GoAccount () {
      if (this.FooterData.every(item => !item.ShopStatus) || this.FooterData.length === 0) {
        this.isAllCount = true
        this.JoinCartListFun(3000)
      }
      else {
        this.isAllCount = false
        this.$router.push('/check')
      }
    },
    JoinCartListFun (LongTime) {
      this.isAllCount = true
      let self = this;
      let timer = setTimeout(() => {
        self.isAllCount = false;
      }, LongTime)
      clearInterval({
        timer
      })
    }

  },
  computed: {
    getShopid () {
      return this.FooterData.ShopCartGoodsID
    },
    isAll: {
      set (val) {
        console.log(val);
        this.FooterData.forEach(item => item.ShopStatus = val)
      },
      get () {
        if (this.FooterData.length === 0) return false
        return this.FooterData.every(item => item.ShopStatus)
      }
    },
    /**
     * 编写遇到的问题 
     * 1： 当reduce 函数计算和的时候 它会将数据进行相加 从而得到Float 浮点型数据 
     * 在计算过程中将Price 通过ParseFloat函数 转换为Float数据类型即可
     * 
     * 2： 或者在计算结果后调用  toFixed() 参数表示小数点小数点后几位
     * 
     * 
     */
    getAllPrice () {
      if (this.FooterData.length != 0) {
        // this.FooterData.forEach(item => item.count)
        return this.FooterData.filter(item => item.ShopStatus)
          .reduce((sum, item) => sum += (item.Price*10 * item.count)/10, 0).toFixed(2)
      }
      else {
        return this.NotPrice
      }
    },

    


    AllCount () {
      return this.FooterData.filter(item => item.ShopStatus).length
    }
  }
}
</script>

<style scoped>
.CarBottom {
  position: fixed;
  display: flex;
  bottom: 49px;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #fff;
}
.PriceActive {
  color: rgb(255, 0, 0);
  font-weight: 700;
}
.ALLmodule,
.AllCountModule,
.close-an-account {
  flex: 1;
  display: flex;
}
.ALLmodule input {
  transform: scale(1.1, 1.1);
  align-self: center;
  outline: none;
}
label {
  padding-left: 14px;
  align-self: center;
  font-size: 15px;
  color: black;
}
.CountText {
  align-self: center;
  margin: 0 auto;
  font-size: 15px;
  color: #000;
}

.close-an-account button {
  width: 85px;
  height: 30px;
  align-self: center;
  margin-left: auto;
  margin-right: 10px;
  background-color: rgb(0, 123, 255);
  outline: none;
  border: none;
  color: #fff;
  border-radius: 50px;
}
</style>