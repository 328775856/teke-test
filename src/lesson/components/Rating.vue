<template>
  <div class="c-rating">
    <div class="frm-rating flex-col">
      <div class="frm-user flex-row">
        <div class="flex-row">
          <img :src="rate.user.avatar"/>
          <div class="nickname">{{rate.user.name}}</div>
        </div>
        <div class="star flex-row">
          <star class="active" v-for="num in rate.score" :key="num.id"></star>
          <star v-for="num in (5-rate.score)" :key="num.id"></star>
        </div>
      </div>
      <div class="frm-remark flex-col">
        <div class="tms">{{rate.tms}}</div>
        <div class="remark">{{rate.remark}}</div>
      </div>
      <div class="frm-reply flex-col" v-if="rate.reply">
        <div class="title">讲师回复</div>
        <div class="tms_reply">{{rate.tms_reply}}</div>
        <div class="reply">{{rate.reply}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Star from './unit/star'

  export default {
    name: "Rating",
    props: ['rate'],
    components: {Star}
  }
</script>

<style scoped>
  .c-rating {
    align-items: flex-start;
    padding: .3rem .3rem;
    background: #fff;
  }

  .frm-rating {
  }

  .frm-user {
    justify-content: space-between;
    width: 100%;
  }

  img {
    width: .6rem;
    height: .6rem;
    border-radius: .6rem;
  }

  .frm-remark, .frm-reply {
    width: 100%;
    align-items: flex-start;
  }

  .frm-reply {
    padding-top: .21rem;
  }

  .tms, .tms_reply {
    padding-top: .21rem;
  }

  .remark, .reply {
    padding: .23rem 0;
  }

  .nickname {
    padding-left: .32rem;
    font-size: .36rem;
    color: #0D0D0D;
  }

  .tms, .tms_reply {
    font-size: .21rem;
    color: #808080;
  }

  .remark, .reply {
    width: 100%;
    font-size: .3rem;
    color: #333333;
    border-bottom: 1px solid #ddd;
  }

  .title {
    padding-left: .3rem;
    border-left: .1rem solid #12b7f5;
    font-size: .3rem;
    color: #808388;
  }
</style>
