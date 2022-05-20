<template>
  <swiper>
    <swiper-item v-for="item in TopImage" :key="item.value"  class="Swiper-Item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index'
export default {
  name: 'detailSwiper',
components: {Swiper,SwiperItem},
props:{
  TopImage:{
    type:Array,
    default (){
      return[]
    }
  }
},
data() {
return {

};
},
methods: {

},
}
</script>

<style scoped>
.Swiper-Item{
  width: 100%;
  height: 350px;
  overflow: hidden;
}
</style>