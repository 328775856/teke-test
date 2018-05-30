<template>
  <div class="c-detail-teacher">
    <div class="flex-row">
      <img v-if="profile.teacher" :src="profile.teacher.avatar"/>
      <div class="flex-col">
        <div class="name">{{teacher.name}}</div>
        <div class="introduce">{{introduce.teacher}}</div>
      </div>
      <div :class="{follow:isFollow}" class="noFollow" @click="follow">{{isFollow?'已关注':'+ 关注'}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: ['teacher', 'profile', 'introduce', 'isFollow'],
    methods: {
      follow() {
        this.$emit('isfollow')
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
    padding-left: .21rem;
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

  .introduce {
    font-size: .24rem;
    color: #808080;
    line-height: .36rem;
  }

  .noFollow {
    width: 1.2rem;
    height: .48rem;
    line-height: .48rem;
    border: 1px solid #2A4EC4;
    border-radius: .24rem;
    color: #2A4EC4;
    font-size: .24rem;
    text-align: center;
  }

  .follow {
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
