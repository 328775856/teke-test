<template>
  <div class="c-evaluate">
    <div class="frm" v-for="item in ratingData.list" :key="item.nickname">
      <div class="flex-row nickname">
        <div class="flex-row">
            <img class="avatar" :src="item.user.avatar">
          <span>{{item.user.name}}</span>
        </div>
        <div class="star">{{item.score}}</div>
      </div>
      <div class="time">{{item.tms}}</div>
      <div class="text">{{item.remark}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "evaluate",
    props: ['ratingData']
  }
</script>

<style scoped>
  .c-evaluate{
    padding:0.1rem 0.3rem 0.5rem  0.3rem;
    background: white;
  }
  .frm{
    border-bottom: 1px solid #ccc;
    padding: 0.3rem 0;
  }
  .nickname{
    justify-content: space-between;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .avatar{
    width:0.6rem;
    height:0.6rem;
    border-radius: 0.3rem;
  }
  .avatar+span{
    padding-left: 0.32rem;
  }
  .time{
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 11.5px;
    color: #808080;
    text-align: left;
  }
  .text{
    width: 100%;
    font-size: 15px;
    color: #333333;
    letter-spacing: 1px;
  }
</style>
