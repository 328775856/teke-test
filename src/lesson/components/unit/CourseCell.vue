<template>
  <div class="c-profile-cell flex-row" @click="go">
    <div class="cover">
      <img :src="profile.cover"/>
    </div>
    <div class="datum flex-col">
      <div class="datum-head">{{profile.title}}</div>
      <div class="datum-body flex-row">
        <div class="teacher">讲师：{{profile.teacher.name}}</div>
        <!--<div class="progress" v-if="profile.type === 'lesson'">{{profile.progress[1] ? '已开' : '未开'}}</div>-->
        <div class="progress" v-if="profile.type === 'series'">{{profile.progress[1]}}/{{profile.progress[0]}}</div>
      </div>
      <div class="datum-foot flex-row">
        <div class="enrollment flex-row">
          <i class="icon-yike icon-people"></i>
          <span>{{profile.enrollment}}人</span>
        </div>
        <div class="price">￥{{profile.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "profile-cell",
    props: ['profile'],
    components: {},
    created() {
     // console.log(this.profile)
    },
    methods: {
      go() {
        switch (this.profile.sn[0])  {
          case 'L':
            window.location.href = `/lesson/detail?sn=${this.profile.sn}`
            break;
          case 'S':
            window.location.href = `/lesson/series?sn=${this.profile.sn}`
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .c-profile-cell {
    padding: .3rem 0;
    border-bottom: 1px solid #DDDDDD;
    cursor: pointer;
    justify-content: space-between;
  }

  .c-profile-cell:last-child {
    border-bottom: 0;
  }

  .cover > img {
    width: 2.4rem;
    height: 1.28rem;
  }
  .datum {
    justify-content: space-between;
    width: 4.2rem;
    height: 1.28rem;
  }
  .datum>div {
    width: 100%;
  }
  .datum-head {
    font-size: .3rem;
    color: #0D0D0D;
    font-weight: bold;
  }
  .datum-body {
    justify-content: space-between;
    font-size: .24rem;
    color: #666;
  }
  .datum-foot {
    justify-content: space-between;
    align-items: flex-end;
  }

  .price {
    font-size: .3rem;
    color: #F23F15;
  }

  .enrollment {
    font-size: .24rem;
    color: #808080;
  }
  .enrollment > i {
    font-size: .24rem;
    margin-right: .5em;
  }

</style>
