<template>
  <block :title="title">
    <router-link slot="more" to="/lesson/home">回到首页</router-link>
    <course-cell :profile="item.profile" v-for="(item,index) in list" :key="index"></course-cell>
  </block>
</template>

<script>
  import CourseCell from "../components/unit/CourseCell";
  import Block from "../../components/Block";
  export default {
    name: 'c-lesson-search',
    components: {Block, CourseCell},
    data() {
      return {
        title: this.$route.query.title,
        list: []
      }
    },
    created() {
      this.api.get('/api/lesson-slice', {
        tag: this.$route.query.tag,
        limit: 20
      }).then((res) => {
        this.list = res.data
      })
    }
  }
</script>

<style scoped>

</style>
