<template>
  <div class="c-detail-teacher">
    <div class="flex-row">
      <img :src="teacher.avatar"/>
      <div class="flex-col">
        <div class="name">{{teacher.name}}</div>
        <div class="about">{{teacher.about}}</div>
      </div>
      <div :class="{followed:teacher.followed}" class="follow" @click="follow">{{teacher.followed?'已关注':'+ 关注'}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lesson-detail-teacher',
    props: ['tusn'],
    data() {
      return {
        teacher: {
          sn: null,
          name: null,
          avatar: null,
          about: null
        }
      }
    },
    created() {
      this.api.get('/api/teacher-datum', {
        usn: this.tusn
      }).then( (res) => {
        this.teacher = res.data
      })
    },
    methods: {
      follow() {
      }
    }
  }
</script>

<style scoped>
  .c-detail-teacher {
  }

  .flex-row {
    justify-content: flex-start;
    padding-bottom: .3rem;
    border-bottom: 1px #DDDDDD solid;
  }

  .flex-col {
    align-items: flex-start;
    width: 80%;
    padding: 0 .21rem;
  }

  img {
    width: .72rem;
    height: .7rem;
    border-radius: 1.4rem;
  }

  .name {
    font-size: .3rem;
    color: #0D0D0D;
  }

  .about {
    font-size: .24rem;
    color: #808080;
    line-height: .36rem;
  }

  .follow {
    width: 1.2rem;
    height: .48rem;
    line-height: .48rem;
    border: 1px solid #2A4EC4;
    border-radius: .24rem;
    color: #2A4EC4;
    font-size: .24rem;
    text-align: center;
  }

  .followed {
    width: 1.2rem;
    height: .48rem;
    line-height: .48rem;
    border: 1px solid #ccc;
    border-radius: .24rem;
    color: #ccc;
    font-size: .24rem;
    text-align: center;
  }
</style>
