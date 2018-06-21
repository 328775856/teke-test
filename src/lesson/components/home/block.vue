<template>
  <block :title="data.title">
    <router-link slot="more" :to="`/lesson/search?title=${data.title}&tag=${data.tag}`">
      <span class="font-medium">查看全部</span>
      <!--<i class="icon-yike icon-arrow-r"></i>-->
    </router-link>
    <course-cell :profile="profile" v-for="(profile,index) in profiles" :key="index"></course-cell>
  </block>
</template>

<script>
  import Block from "../../../components/Block";
  import CourseCell from "../unit/CourseCell";
  export default {
    name: 'lesson-home-block',
    components: {Block, CourseCell},
    props: ['data'],
    data() {
      return {
        profiles: []
      }
    },
    created() {
      if (this.data.list.length) {
        for (let item of this.data.list) {
          this.profiles.push(item.profile)
        }
      }
    },
    computed: {
    }
  }
</script>

<style scoped>
span{
  font-size: .27rem;
}
</style>
