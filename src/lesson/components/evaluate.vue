<template>
  <div class="c-evaluate">
    <div class="frm" v-for="item in ratingData.list" :key="item.nickname">
      <div class="flex-row frm-nickname">
        <div class="flex-row nickname">
          <img class="avatar" :src="item.user.avatar">
          <span>{{item.user.name}}</span>
        </div>
        <div class="star flex-row" v-for="item in item.score" :key="item.id">
          <star class="active"></star>
        </div>
        <div class="star flex-row" v-for="item in (5-item.score)" :key="item.id">
          <star></star>
        </div>
      </div>
      <div class="time">{{item.tms}}</div>
      <div class="text">{{item.remark}}qw</div>
      <div class="time">{{item.tms_reply}}</div>
      <div class="text"><span>[回复]：</span>{{item.reply}}qw</div>
    </div>
  </div>
</template>

<script>
  import Star from '../components/star.vue'

  export default {
    name: "evaluate",
    props: ['ratingData'],
    components: {Star},
    data() {
      return {
      }
    }
  }
</script>

<style scoped>

  .c-evaluate {
    padding: 0.1rem 0.3rem 0.5rem 0.3rem;
    background: white;
  }

  .frm {
    border-bottom: 1px solid #ccc;
    padding: 0.3rem 0;
  }

  .frm-nickname {
    justify-content: space-between;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
  }

  .nickname {
    justify-content: flex-start;
    width: 80%;
  }

  .avatar {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 0.3rem;
  }

  .avatar + span {
    padding-left: 0.32rem;
  }

  .time {
    height: 0.6rem;
    margin: 0 auto;
    line-height: 0.6rem;
    font-size: 11.5px;
    color: #808080;
    text-align: left;
  }

  .text {
    margin: 0 auto;
    padding-bottom: 0.3rem;
    font-size: 15px;
    color: #333333;
    letter-spacing: 1px;
    border-bottom: 1px solid #ccc;
  }

  .text:last-child {
    padding-bottom: 0;
    border: 0;
  }

  .text span {
    color: #12b7f5;
  }
</style>
<style>
  .active i.icon-star{
    color: #FFC600;
  }
</style>
