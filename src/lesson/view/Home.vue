<template>
  <div class="c-home">
    <div class="sections">
      <div class="section" v-for="(item,index) in sections" :key="index">
        <lesson-home-banner v-if="item.form === 'banner'" :data="item"></lesson-home-banner>
        <lesson-home-block v-if="item.form === 'block' && item.list.length" :data="item"></lesson-home-block>
      </div>
    </div>
    <div class="overall flex-row" v-if="sections.length">
      <router-link to="/lesson/search?title=课程列表&tag=">查看所有课程</router-link>
    </div>
    <navigation></navigation>
  </div>
</template>
<script>
  import LessonHomeBanner from "../components/home/banner";
  import LessonHomeBlock from "../components/home/block";
  import Navigation from "../../components/Navigation";
  export default {
    name: 'lesson-home',
    components: {Navigation, LessonHomeBlock, LessonHomeBanner},
    data() {
      return {
        sections: []
      }
    },
    created() {
      this.api.get('/api/lesson-home')
        .then((res) => {
          this.sections = res.data
        })
    }
  }
</script>
<style scoped>
  .c-home {
    padding-bottom: 1rem;
  }
  .overall {
    padding: .5rem;
  }
  .overall a {
    font-size: .2rem;
    color: #aaa;
    padding: .1rem .2rem;
    border: 1px solid #ccc;
    border-radius: 1em;
  }
</style>
<style>
  .c-block {
    margin-bottom: .1rem;
  }
</style>
