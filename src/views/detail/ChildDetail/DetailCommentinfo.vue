<template>
  <div class='DetailCommentinfo'
       v-if="Object.keys(commentInfo).length!== 0">
    <div class="Comment-title">用户评价
      <div class="Comment-title">更多</div>
    </div>
    <div class="user-info">
      <img :src="commentInfo.user.avatar"
           alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="User-comment-info">
      <div class="comment-text">{{commentInfo.content}}</div>
      <div class="comment-date">{{commentInfo.created|showDate}}
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="Comment-title">买家秀&nbsp
        <div class="Comment-title">查看全部</div>
      </div>
      <div class="comment-images-info">
        <img :src="item"
             v-for="item in commentInfo.images"
             alt=""
             class="comment-images">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailCommentinfo',
  components: {},
  created () {

  },
  mounted () {

  },
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      imglength: null
    };
  },
  methods: {
  },
  filters: {
    showDate (value) {
      const Datetime = value * 1000
      const date = new Date(Datetime)
      const dateYear = date.getFullYear();
      const dateMonth = date.getMonth() + 1;
      const dateDay = date.getDay() + 1;
      const datetime = dateYear + '-0' + dateMonth + '-0' + dateDay
      return "评论时间:" + datetime

    }
  }
}
</script>

<style scoped>
.DetailCommentinfo {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  margin: 10px auto 10px;
  width: 95%;
  padding: 5px 10px 0px;
  color: rgb(41, 40, 40);
}
.Comment-title {
  display: flex;
  font-size: 16px;
  line-height: 40px;
  justify-content: space-between;
}
.user-info {
  display: flex;
  margin: 5px 0;
  align-items: center;
}
.user-info img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.user-info span {
  font-size: 16px;
  margin-left: 5px;
}
.User-comment-info {
  margin-top: 10px;
}
.comment-text {
  font-size: 15px;
  color: rgb(41, 40, 40);
  margin-bottom: 10px;
}
.comment-images-info {
  width: 100px;
  height: 100px;
  display: flex;
  font-size: 15px;
}
.comment-images {
  margin-top: 5px;
  width: 100%;
  height: 100%;
}
</style>