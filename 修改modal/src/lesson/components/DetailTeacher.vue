<template>
  <div class="c-detail-teacher" v-if="teacher">
    <div class="flex-row" >
      <div class="flex-col">
        <img :src="teacher.avatar"/>
      </div>
      <div class="flex-col flex-item">
        <div class="name font-medium">{{teacher.name}}</div>
        <div class="about text-desc font-medium">{{teacher.about}}</div>
      </div>
      <!--<div :class="{followed:teacher.followed}" class="follow font-24" @click="follow">{{teacher.followed?'已关注':'+ 关注'}}</div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lesson-detail-teacher',
    props: ['tusn'],
    data() {
      return {
        teacher: null
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
        this.api.post('/api/follow-teacher', {
          usn: this.tusn
        }).then( (res) => {
          this.teacher.followed = res.data.isFollow
        }, this.api.onErrorSign)
      }
    }
  }
</script>

<style scoped>
  .c-detail-teacher {
    border-bottom: 1px #DDDDDD solid;
    padding: .1rem 0 .4rem 0;
  }

  .flex-row {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex-col {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex-item {
    padding: 0 .21rem;
  }

  img {
    width: .72rem;
    height: .72rem;
    border-radius: 1.4rem;
  }

  .name {
    font-size: .3rem;
    color: #0D0D0D;
  }

  .about {
    color: #808080;
    line-height: .36rem;
    text-align: justify;
    word-break: break-all;
  }

  .follow {
    width: 1.2rem;
    height: .48rem;
    line-height: .48rem;
    border: 1px solid #2A4EC4;
    border-radius: .24rem;
    color: #2A4EC4;
    text-align: center;
  }

  .followed {
    width: 1.2rem;
    height: .48rem;
    line-height: .48rem;
    border: 1px solid #ccc;
    border-radius: .24rem;
    color: #ccc;
    text-align: center;
  }
</style>
