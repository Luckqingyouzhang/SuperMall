import { debounce } from '../common/debounce'
export const ItemListenterMixin = {
  data () {
    return {
      ItemimgListenter: null,
      newrefresh: null,
    }
  },
  mounted () {
    if (this.$route.path === '/home') {
      this.newrefresh = debounce(this.$refs.ScrollDate.refresh, 100)
      // console.log("我是Home混入内容");
    }
    else if (this.$route.path === '/detail') {
      this.newrefresh = debounce(this.$refs.DetailScroll.refresh, 100);
      // console.log("我是Detail混入内容");
    }

    //将防抖刷新用变量接收进行调用 
    this.ItemimgListenter = () => {
      this.newrefresh()
    }
    this.$bus.$on("Itemimgload", this.ItemimgListenter)

  },
}