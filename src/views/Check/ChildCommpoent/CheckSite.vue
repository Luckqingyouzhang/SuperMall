<template>
  <div class='CheckSite'>
    <div class="leftSita">
      <img src="~Pro/img/check/Sita.png"
           alt="">
    </div>
    <div class="CenterSita">
      <div>{{name}}<span>{{Phone}}</span></div>
      <div>{{AddressInfo}}{{detailAddressInfo}}{{isdefault}}</div>
    </div>
    <div class="leftSita">
      <img src="~Pro/img/check/next.png"
           alt="">
    </div>
  </div>

</template>

<script>

export default {
  name: 'CheckSite',
  components: {},
  data () {
    return {
      Arrlength: 0
    };
  },
  methods: {

  },
  created () {
  },

  computed: {
    name () {
      return this.$store.state.AddressInfo[this.$store.state.AddressInfo.length - 1].name
    },
    Phone () {
      return this.$store.state.AddressInfo[this.$store.state.AddressInfo.length - 1].Phone
    },
    AddressInfo () {
      return this.$store.state.AddressInfo[this.$store.state.AddressInfo.length - 1].Address
    },
    detailAddressInfo () {
      return this.$store.state.AddressInfo[this.$store.state.AddressInfo.length - 1].detailAddressInfo
    },
    isdefault () {
      if (this.$store.state.AddressInfo[this.$store.state.AddressInfo.length - 1].isdefault) {
        return "(默认地址)"
      }
      else {
        return "新地址"
      }
    }
  }
}
</script>

<style scoped>
.CheckSite {
  position: absolute;
  display: flex;
  top: 44px;
  left: 1.5%;
  width: 97%;
  height: 70px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  background-color: #fff;
}
.leftSita {
  position: relative;
  width: 15%;
  height: 70px;
}
.leftSita img {
  position: absolute;
  top: 20px;
  left: 15px;
  width: 30px;
  height: 30px;
}
.CenterSita {
  width: 70%;
  height: 70px;
}
.CenterSita div {
  margin-top: 10px;
}
.CenterSita div:nth-child(2) {
  font-size: 12px;
}
</style>