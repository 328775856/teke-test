<template>
  <block :title="title" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <router-link slot="more" to="/lesson/home">回到首页</router-link>
    <course-cell :profile="item.profile" v-for="(item,index) in list" :key="index"></course-cell>
    <!--<bloading v-show="busy">正在加载...</bloading>-->
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
        busy: false
      }
    },
    created() {
      this.api.get('/api/lesson-list', {
        tag: this.$route.query.tag,
        limit: count*10
      }).then((res) => {
        this.list = res.data
      })
    },
    methods: {
      loadMore: function () {
        if (this.len[this.len.length - 1] === this.len[this.len.length - 2]) {
          this.busy = false;
          return
        }
        this.busy = true;
        setTimeout(() => {
          for (let i = 0, j = 1; i < j; i++) {
            this.api.get('/api/lesson-list', {
              tag: this.$route.query.tag,
              limit: (++count)*10
            }).then((res) => {
              this.list = res.data
              this.len.push(this.list.length)
            })
          }
          this.busy = false;
        }, 1000);
      }
    }
  }
</script>

<style scoped>

</style>
