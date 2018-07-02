<template>
  <block class="c-search" :title="title" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <router-link slot="more" to="/lesson/home" class="home">
      <i class="icon-yike icon-home"></i>
      <span>首页</span>
    </router-link>
    <course-cell :profile="item.profile" v-for="(item,index) in list" :key="index"></course-cell>
    <div class="end flex-row" v-show="isEnd">
      <span class="btn-warning">现在只有这么多课啦</span>
      <!--<router-link to="/lesson/home">查看精品课程</router-link>-->
    </div>
  </block>
</template>

<script>
  import CourseCell from "../components/unit/CourseCell";
  import Block from "../../components/Block";
  import infiniteScroll from 'vue-infinite-scroll'
  import Bloading from '@/test/view/Block-loading'

  let count = 1;
  export default {
    name: 'c-lesson-search',
    components: {Block, CourseCell, Bloading},
    directives: {infiniteScroll},
    data() {
      return {
        title: this.$route.query.title,
        list: [],
        len: [count],
        busy: false,
        isEnd: false
      }
    },
    created() {
      this.api.get('/api/lesson-list', {
        tag: this.$route.query.tag,
        limit: count * 10
      }).then((res) => {
        this.list = res.data
      })
    },
    methods: {
      loadMore: function () {
        if (this.len[this.len.length - 1] === this.len[this.len.length - 2]) {
          this.isEnd = true
          this.busy = false;
          return
        }
        this.busy = true;
        setTimeout(() => {
          for (let i = 0, j = 1; i < j; i++) {
            this.api.get('/api/lesson-list', {
              tag: this.$route.query.tag,
              limit: (++count) * 10
            }).then((res) => {
              this.list = res.data
              this.len.push(this.list.length)
            })
          }
          this.busy = false;
        }, 100);
      }
    }
  }
</script>

<style scoped>

  .icon-home {
    font-size: .24rem;
    font-weight: bold;
  }
  .end {
    padding: .3rem 0;
  }

  .end span, .end > a {
    font-size: .2rem;
    color: #aaa;
    /*padding: .1rem .2rem;*/
    /*border: 1px solid #ccc;*/
    border-radius: 1em;
    cursor: pointer;
  }

  .btn-warning {
    color: #aaa;
    background: #fff;
  }
</style>

<style>
  .c-search > .block-head {
    position: sticky;
    top: 0;
    background: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
</style>
