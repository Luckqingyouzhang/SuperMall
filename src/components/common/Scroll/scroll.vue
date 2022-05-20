<template>
  <div class='wrapper'
       ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ObserveImage from '@better-scroll/observe-image'
export default {
  name: 'scroll',
  components: {

  },
  props: {
    ProbeType: {
      type: Number,
      default: 0
    },
    PullUpload: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null,
    };
  },
  mounted () {
    this.refresh()
    const options = {
      click: true,
      disableTouch: false,
      observeImage: true, // 开启 observe-image 插件
      probeType: this.ProbeType,
      pullUpLoad: this.PullUpload
    }
    //创建better-scroll
    BScroll.use(ObserveImage)
    this.scroll = new BScroll(this.$refs.wrapper, options)


    //当ProbeType 值等于 2或者等于 3 时 才进行监听  2  监听 滑动的区域 （不包括惯性下拉区域 ） 3 : 监听滑动区域（包括 惯性下拉的区域 ）
    if (this.ProbeType === 2 || this.ProbeType === 3) {
      //监听滚动的位置
      this.scroll.on('scroll', (position) => {
        this.$emit('BackTopParams', position)

      })

    }

    //监听滑动到底部区域的事件 
    if (this.PullUpload) {
      //监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('PullLoading')
      })
    }

  },
  methods: {
    //封装 Scroll 方法 返回顶部
    ScrollTo (x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    //封装finishpillUp 完成上拉加载更多 
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    getScrollY () {
      return this.scroll ? this.scroll.y : 0
    }

  },
}
</script>

<style scoped>
</style>
